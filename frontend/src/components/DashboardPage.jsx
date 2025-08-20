import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Upload, File, Folder, Share2, Download, Trash2, Plus, Search } from 'lucide-react';
import { Input } from './ui/input';
import { getCurrentUser, isAuthenticated, mockLogout } from '../utils/mockAuth';
import { mockFiles, mockStats } from '../utils/mockData';
import { useToast } from '../hooks/use-toast';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }

    const currentUser = getCurrentUser();
    setUser(currentUser);
    
    // Load mock data - will be replaced with API calls
    setFiles(mockFiles);
    setStats(mockStats);
  }, [navigate]);

  const handleLogout = () => {
    mockLogout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate('/');
  };

  const handleFileUpload = () => {
    toast({
      title: "Upload feature",
      description: "File upload functionality will be implemented with backend."
    });
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const storagePercentage = user ? (user.storageUsed / user.storageLimit) * 100 : 0;

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        {/* Storage Stats */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Storage Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Used: {formatBytes(user.storageUsed)}</span>
                <span>Total: {formatBytes(user.storageLimit)}</span>
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
                <Button onClick={handleFileUpload}>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-2">
              {filteredFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <File className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">{formatBytes(file.size)} • {file.modified}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;