import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const navItems = [
    'Get App',
    'Tera AI',
    'Product', 
    'Pricing',
    'Referral program',
    'Help Center',
    'Blog',
    'Integrations'
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">TeraBox</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Globe className="w-4 h-4 mr-1" />
            EN
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            Login
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;