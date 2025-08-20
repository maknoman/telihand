import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-20 h-20 bg-orange-400 rounded-2xl transform rotate-12 opacity-80"></div>
        <div className="absolute top-32 right-40 w-8 h-8 bg-purple-500 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-60 w-12 h-12 bg-blue-400 rounded-lg transform -rotate-6 opacity-70"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-yellow-400 rounded-xl transform rotate-45 opacity-75"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[600px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              1024GB Cloud Storage
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Easy to use, private and secure, reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-3 text-gray-900 border-gray-300 hover:bg-gray-50 rounded-full"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full flex items-center justify-center"
              >
                Download
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Main 3D Box Illustration */}
              <div className="w-80 h-80 relative">
                {/* Cloud storage icons floating */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm transform rotate-12 shadow-lg">
                  24h
                </div>
                <div className="absolute top-20 right-10 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center transform -rotate-6 shadow-md">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="absolute bottom-20 left-5 w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center transform rotate-6 shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <div className="absolute bottom-32 right-5 w-8 h-8 bg-purple-500 rounded-full shadow-md"></div>
                
                {/* Central figure with 1024G text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-12 shadow-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl transform -rotate-12">1024G</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute top-5 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-10 left-20 w-4 h-4 bg-green-400 rounded-sm transform rotate-45 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;