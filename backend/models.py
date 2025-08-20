from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
from bson import ObjectId

# Pydantic models for API requests/responses

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class UserRegister(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    email: EmailStr
    storage_used: int = Field(default=0)  # bytes
    storage_limit: int = Field(default=1099511627776)  # 1TB in bytes
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class UserResponse(BaseModel):
    id: str
    name: str
    email: EmailStr
    storage_used: int
    storage_limit: int

class FileUpload(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    user_id: PyObjectId
    filename: str
    original_name: str
    size: int
    mime_type: str
    path: str
    is_shared: bool = Field(default=False)
    share_link: Optional[str] = None
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class FileResponse(BaseModel):
    id: str
    filename: str
    original_name: str
    size: int
    mime_type: str
    is_shared: bool
    uploaded_at: datetime

class DashboardStats(BaseModel):
    total_files: int
    total_folders: int
    shared_files: int
    recent_uploads: int
    storage_used: int
    storage_limit: int