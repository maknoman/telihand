# TeraBox Clone - Full Stack Contracts

## API Contracts

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user profile

### File Management Endpoints
- `GET /api/files` - Get user's files
- `POST /api/files/upload` - Upload file
- `DELETE /api/files/:id` - Delete file
- `GET /api/files/:id/download` - Download file
- `PUT /api/files/:id/share` - Share file (generate link)

### User Dashboard Endpoints  
- `GET /api/dashboard/stats` - Get storage stats
- `GET /api/dashboard/recent` - Get recent files

## Frontend Pages to Implement

### 1. Authentication Pages
- `/login` - Login page
- `/register` - Registration page

### 2. Product Pages
- `/get-app` - Download apps page
- `/tera-ai` - AI features page
- `/product` - Product features page
- `/pricing` - Pricing plans page

### 3. User Dashboard
- `/dashboard` - Main file management dashboard
- `/dashboard/files` - File browser
- `/dashboard/shared` - Shared files
- `/dashboard/settings` - User settings

### 4. Support Pages
- `/help` - Help center
- `/blog` - Blog page

## Data Models

### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  storageUsed: Number, // in bytes
  storageLimit: Number, // 1TB = 1099511627776 bytes
  createdAt: Date,
  updatedAt: Date
}
```

### File Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  filename: String,
  originalName: String,
  size: Number,
  mimeType: String,
  path: String,
  isShared: Boolean,
  shareLink: String,
  uploadedAt: Date
}
```

## Mock Data Currently Used (to be replaced)
- Static user authentication status
- Dummy file listings in dashboard
- Placeholder storage statistics

## Frontend-Backend Integration Plan

1. **Authentication Flow**: Implement JWT-based authentication
2. **File Upload**: Use multer for file handling, store metadata in MongoDB
3. **File Storage**: Store files in `/app/uploads` directory
4. **State Management**: Use React Context for user authentication state
5. **API Integration**: Replace all mock data with real API calls

## Security Considerations
- JWT token storage in localStorage
- File upload validation and size limits
- User authorization for file access
- CORS configuration for frontend-backend communication