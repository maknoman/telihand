import React from 'react';
import { Button } from './ui/button';
import { RefreshCw } from 'lucide-react';

const SyncSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Illustration */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <div className="relative">
              {/* Box illustration */}
              <div className="w-80 h-60 relative">
                {/* Main box with sync icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl transform perspective-1000 rotate-y-12">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Backup and Sync
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Easily back up or share your cloud files through our desktop apps, mobile 
              apps, or the web. If you sync or back up data from any device, all 
              changes will be automatically updated in real time, so you can access the 
              latest files anytime, anywhere on all devices.
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-gray-900 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncSection;