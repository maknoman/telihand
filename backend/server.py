from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File, status
from fastapi.responses import FileResponse as FastAPIFileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
import uuid
from datetime import datetime
import shutil

# Import our models and auth
from models import *
from auth import hash_password, verify_password, create_access_token, get_current_user

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create upload directory
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Authentication routes
@api_router.post("/auth/register")
async def register(user_data: UserRegister):
    # Check if user already exists
    existing_user = await db.users.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Hash password and create user
    hashed_password = hash_password(user_data.password)
    user_dict = {
        "name": user_data.name,
        "email": user_data.email,
        "password": hashed_password,
        "storage_used": 0,
        "storage_limit": 1099511627776,  # 1TB
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
    
    result = await db.users.insert_one(user_dict)
    
    return {"message": "User registered successfully", "user_id": str(result.inserted_id)}

@api_router.post("/auth/login")
async def login(credentials: UserLogin):
    # Find user by email
    user = await db.users.find_one({"email": credentials.email})
    if not user or not verify_password(credentials.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Create access token
    access_token = create_access_token({"user_id": str(user["_id"])})
    
    user_response = UserResponse(
        id=str(user["_id"]),
        name=user["name"],
        email=user["email"],
        storage_used=user["storage_used"],
        storage_limit=user["storage_limit"]
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user_response
    }

@api_router.get("/auth/me")
async def get_current_user_info(current_user=Depends(get_current_user)):
    return UserResponse(
        id=str(current_user["_id"]),
        name=current_user["name"],
        email=current_user["email"],
        storage_used=current_user["storage_used"],
        storage_limit=current_user["storage_limit"]
    )

# File management routes
@api_router.post("/files/upload")
async def upload_file(
    file: UploadFile = File(...),
    current_user=Depends(get_current_user)
):
    # Check storage limit
    if current_user["storage_used"] + file.size > current_user["storage_limit"]:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail="Storage limit exceeded"
        )
    
    # Generate unique filename
    file_extension = Path(file.filename).suffix
    unique_filename = f"{uuid.uuid4()}{file_extension}"
    file_path = UPLOAD_DIR / unique_filename
    
    # Save file to disk
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not upload file: {str(e)}"
        )
    
    # Save file metadata to database
    file_dict = {
        "user_id": current_user["_id"],
        "filename": unique_filename,
        "original_name": file.filename,
        "size": file.size,
        "mime_type": file.content_type,
        "path": str(file_path),
        "is_shared": False,
        "share_link": None,
        "uploaded_at": datetime.utcnow()
    }
    
    result = await db.files.insert_one(file_dict)
    
    # Update user storage usage
    await db.users.update_one(
        {"_id": current_user["_id"]},
        {"$inc": {"storage_used": file.size}}
    )
    
    return {
        "message": "File uploaded successfully",
        "file_id": str(result.inserted_id),
        "filename": file.filename
    }

@api_router.get("/files", response_model=List[FileResponse])
async def get_user_files(current_user=Depends(get_current_user)):
    files_cursor = db.files.find({"user_id": current_user["_id"]})
    files = await files_cursor.to_list(1000)
    
    return [
        FileResponse(
            id=str(file["_id"]),
            filename=file["filename"],
            original_name=file["original_name"],
            size=file["size"],
            mime_type=file["mime_type"],
            is_shared=file["is_shared"],
            uploaded_at=file["uploaded_at"]
        )
        for file in files
    ]

@api_router.delete("/files/{file_id}")
async def delete_file(file_id: str, current_user=Depends(get_current_user)):
    # Find file
    file_doc = await db.files.find_one({
        "_id": ObjectId(file_id),
        "user_id": current_user["_id"]
    })
    
    if not file_doc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="File not found"
        )
    
    # Delete file from disk
    try:
        os.remove(file_doc["path"])
    except FileNotFoundError:
        pass  # File already deleted from disk
    
    # Delete from database
    await db.files.delete_one({"_id": ObjectId(file_id)})
    
    # Update user storage usage
    await db.users.update_one(
        {"_id": current_user["_id"]},
        {"$inc": {"storage_used": -file_doc["size"]}}
    )
    
    return {"message": "File deleted successfully"}

@api_router.get("/files/{file_id}/download")
async def download_file(file_id: str, current_user=Depends(get_current_user)):
    # Find file
    file_doc = await db.files.find_one({
        "_id": ObjectId(file_id),
        "user_id": current_user["_id"]
    })
    
    if not file_doc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="File not found"
        )
    
    if not os.path.exists(file_doc["path"]):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="File not found on disk"
        )
    
    return FastAPIFileResponse(
        path=file_doc["path"],
        filename=file_doc["original_name"],
        media_type=file_doc["mime_type"]
    )

@api_router.get("/dashboard/stats")
async def get_dashboard_stats(current_user=Depends(get_current_user)):
    total_files = await db.files.count_documents({"user_id": current_user["_id"]})
    
    return DashboardStats(
        total_files=total_files,
        total_folders=0,  # TODO: Implement folders
        shared_files=0,   # TODO: Implement sharing
        recent_uploads=total_files,  # Simplified for now
        storage_used=current_user["storage_used"],
        storage_limit=current_user["storage_limit"]
    )

# Legacy endpoints (keep for compatibility)
@api_router.get("/")
async def root():
    return {"message": "TeraBox API is running"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()