import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Upload, File, Folder, Share2, Download, Trash2, Plus, Search } from 'lucide-react';
import { Input } from './ui/input';
import { useAuth } from '../contexts/AuthContext';
import { fileAPI, dashboardAPI, formatBytes } from '../services/api';
import { useToast } from '../hooks/use-toast';

const DashboardPage = () => {
  const { user, logout, updateUser } = useAuth();
  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [filesResponse, statsResponse] = await Promise.all([
        fileAPI.getFiles(),
        dashboardAPI.getStats()
      ]);
      
      setFiles(filesResponse.data);
      setStats(statsResponse.data);
      
      // Update user storage from stats
      if (user) {
        updateUser({
          ...user,
          storage_used: statsResponse.data.storage_used
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate('/');
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      await fileAPI.upload(file, (progressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(progress);
      });

      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`
      });

      // Reload dashboard data
      await loadDashboardData();
    } catch (error) {
      const message = error.response?.data?.detail || 'Upload failed';
      toast({
        title: "Upload failed",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteFile = async (fileId, fileName) => {
    try {
      await fileAPI.delete(fileId);
      toast({
        title: "File deleted",
        description: `${fileName} has been deleted successfully.`
      });
      
      // Reload dashboard data
      await loadDashboardData();
    } catch (error) {
      toast({
        title: "Delete failed",
        description: "Failed to delete file",
        variant: "destructive"
      });
    }
  };

  const handleDownloadFile = async (fileId, fileName) => {
    try {
      await fileAPI.download(fileId, fileName);
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download file",
        variant: "destructive"
      });
    }
  };

  const storagePercentage = user ? (user.storage_used / user.storage_limit) * 100 : 0;

  const filteredFiles = files.filter(file =>
    file.original_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFileIcon = (mimeType) => {
    if (mimeType?.startsWith('image/')) return '🖼️';
    if (mimeType?.startsWith('video/')) return '🎥';
    if (mimeType?.startsWith('audio/')) return '🎵';
    if (mimeType?.includes('pdf')) return '📄';
    if (mimeType?.includes('text')) return '📝';
    return '📁';
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">TeraBox</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, {user.name}</span>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Upload Progress */}
        {isUploading && (
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Uploading file...</span>
                <span className="text-sm text-gray-600">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </CardContent>
          </Card>
        )}

        {/* Storage Stats */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Storage Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Used: {formatBytes(user.storage_used)}</span>
                <span>Total: {formatBytes(user.storage_limit)}</span>
              </div>
              <Progress value={storagePercentage} className="h-2" />
              <p className="text-xs text-gray-500">
                {(100 - storagePercentage).toFixed(1)}% available
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleFileUpload}>
            <CardContent className="p-6 text-center">
              <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium">Upload Files</h3>
              <p className="text-sm text-gray-500">Drag and drop or click</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Folder className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium">New Folder</h3>
              <p className="text-sm text-gray-500">Create new folder</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Share2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium">Shared Files</h3>
              <p className="text-sm text-gray-500">View shared content</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-medium">Downloads</h3>
              <p className="text-sm text-gray-500">Recent downloads</p>
            </CardContent>
          </Card>
        </div>

        {/* File Browser */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>My Files</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button onClick={handleFileUpload} disabled={isUploading}>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-2">
              {filteredFiles.length === 0 ? (
                <div className="text-center py-12">
                  <File className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {searchQuery ? 'No files match your search' : 'No files uploaded yet'}
                  </p>
                  <Button onClick={handleFileUpload} className="mt-4">
                    Upload your first file
                  </Button>
                </div>
              ) : (
                filteredFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getFileIcon(file.mime_type)}</span>
                      <div>
                        <p className="font-medium">{file.original_name}</p>
                        <p className="text-sm text-gray-500">
                          {formatBytes(file.size)} • {new Date(file.uploaded_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDownloadFile(file.id, file.original_name)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteFile(file.id, file.original_name)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;