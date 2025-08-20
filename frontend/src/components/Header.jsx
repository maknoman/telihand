import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: 'Get App', path: '/get-app' },
    { name: 'Tera AI', path: '#' },
    { name: 'Product', path: '#' }, 
    { name: 'Pricing', path: '/pricing' },
    { name: 'Referral program', path: '#' },
    { name: 'Help Center', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Integrations', path: '#' }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">TeraBox</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Globe className="w-4 h-4 mr-1" />
            EN
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;