import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, Apple, Smartphone, Monitor } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const GetAppPage = () => {
  const apps = [
    {
      platform: 'Windows',
      icon: Monitor,
      description: 'Desktop app for Windows 10 and above',
      version: '3.2.1',
      size: '45.2 MB',
      features: ['Auto sync', 'Offline access', 'Drag & drop upload']
    },
    {
      platform: 'macOS',
      icon: Apple,
      description: 'Native app for Mac computers',
      version: '3.2.0',
      size: '38.7 MB',
      features: ['Menu bar integration', 'Quick share', 'Smart sync']
    },
    {
      platform: 'Android',
      icon: Smartphone,
      description: 'Mobile app for Android devices',
      version: '4.1.2',
      size: '28.3 MB',
      features: ['Camera backup', 'Offline files', 'Share anywhere']
    },
    {
      platform: 'iOS',
      icon: Apple,
      description: 'App for iPhone and iPad',
      version: '4.1.1',
      size: '32.1 MB',
      features: ['Photo backup', 'Document scan', 'Touch ID/Face ID']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get TeraBox Apps
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access your files from anywhere with TeraBox apps. Available for all your devices.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apps.map((app, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2">{app.platform}</h3>
                <p className="text-gray-600 text-center mb-4">{app.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500">Version: {app.version}</p>
                  <p className="text-sm text-gray-500">Size: {app.size}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Requirements */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Windows</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Windows 10 or later</li>
                <li>4GB RAM minimum</li>
                <li>100MB free space</li>
                <li>Internet connection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">macOS</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>macOS 10.14 or later</li>
                <li>4GB RAM minimum</li>
                <li>100MB free space</li>
                <li>Internet connection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Android</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Android 6.0 or later</li>
                <li>2GB RAM minimum</li>
                <li>50MB free space</li>
                <li>Internet connection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">iOS</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>iOS 13.0 or later</li>
                <li>Compatible with iPhone, iPad</li>
                <li>50MB free space</li>
                <li>Internet connection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GetAppPage;