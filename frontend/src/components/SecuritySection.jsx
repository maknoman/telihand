import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              TeraBox protects data security
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TeraBox highly values your data security and privacy protection, and 
              adopts multiple security measures to ensure the security of your data.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-end encryption</h3>
                  <p className="text-gray-600">Your files are encrypted during transfer and storage</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Two-factor authentication</h3>
                  <p className="text-gray-600">Extra security layer for your account</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy protection</h3>
                  <p className="text-gray-600">Your data belongs to you and only you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Security shield illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-16 h-16 text-white opacity-80" />
                    </div>
                    
                    {/* Floating security elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-md">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute top-10 left-5 w-8 h-8 bg-yellow-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-15 right-10 w-6 h-6 bg-pink-400 rounded-sm transform rotate-45 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;