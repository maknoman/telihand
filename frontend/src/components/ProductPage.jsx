import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Smartphone, Monitor, Globe, Shield, Zap, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ProductPage = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: '1024GB Free Storage',
      description: 'Get 1TB of free cloud storage - more than any other provider. No credit card required.',
      highlights: ['1,024GB (1TB) free', 'No expiration', 'Instant access']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Sync',
      description: 'Files sync instantly across all your devices. Changes appear everywhere in seconds.',
      highlights: ['Real-time sync', 'Delta sync technology', 'Offline access']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share files and folders with anyone. Control permissions and track changes.',
      highlights: ['Secure sharing', 'Permission controls', 'Version history']
    },
    {
      icon: Globe,
      title: 'Universal Access',
      description: 'Access your files from anywhere - web, desktop, or mobile. All platforms supported.',
      highlights: ['Web access', 'Mobile apps', 'Desktop clients']
    }
  ];

  const platforms = [
    {
      name: 'Web Browser',
      icon: Globe,
      description: 'Full-featured web interface accessible from any browser',
      features: ['Drag & drop upload', 'File preview', 'Sharing controls', 'Online editing']
    },
    {
      name: 'Desktop Apps',
      icon: Monitor,
      description: 'Native applications for Windows, macOS, and Linux',
      features: ['Folder sync', 'System integration', 'Offline access', 'Menu bar controls']
    },
    {
      name: 'Mobile Apps',
      icon: Smartphone,
      description: 'iOS and Android apps with full functionality',
      features: ['Auto photo backup', 'Offline files', 'Document scanner', 'Share anywhere']
    }
  ];

  const businessFeatures = [
    'Advanced admin controls',
    'Team management dashboard',
    'Audit logs and reporting',
    'Single sign-on (SSO)',
    'Advanced security policies',
    'Priority customer support',
    'Custom branding options',
    'API access and integrations'
  ];

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All files are encrypted before leaving your device and remain encrypted in our servers.'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account with 2FA support.'
    },
    {
      title: 'Zero-Knowledge Architecture',
      description: 'We cannot access your files even if we wanted to - you hold the keys.'
    },
    {
      title: 'SOC 2 Compliance',
      description: 'We meet the highest standards for security, availability, and confidentiality.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-blue-100 text-blue-800 text-lg px-6 py-2">
            🚀 Complete Cloud Solution
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Complete Cloud Storage Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            TeraBox isn't just storage - it's a complete cloud platform designed for individuals, 
            teams, and businesses. Get 1TB free and experience the future of file management.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full mr-4">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-full">
            Watch Demo
          </Button>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Support */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Available Everywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <platform.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your files are protected by the same security standards used by Fortune 500 companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Business</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features for teams and organizations that need more control and insights.
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">TeraBox vs Others</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold bg-blue-50">TeraBox</th>
                      <th className="text-center p-6 font-semibold">Competitor A</th>
                      <th className="text-center p-6 font-semibold">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-6">Free Storage</td>
                      <td className="p-6 text-center bg-blue-50 font-semibold text-blue-600">1024GB</td>
                      <td className="p-6 text-center">15GB</td>
                      <td className="p-6 text-center">5GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-6">File Size Limit</td>
                      <td className="p-6 text-center bg-blue-50 font-semibold text-blue-600">20GB</td>
                      <td className="p-6 text-center">100MB</td>
                      <td className="p-6 text-center">2GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-6">Platforms Supported</td>
                      <td className="p-6 text-center bg-blue-50 font-semibold text-blue-600">All</td>
                      <td className="p-6 text-center">Limited</td>
                      <td className="p-6 text-center">Most</td>
                    </tr>
                    <tr>
                      <td className="p-6">AI Features</td>
                      <td className="p-6 text-center bg-blue-50 font-semibold text-blue-600">✓</td>
                      <td className="p-6 text-center">✗</td>
                      <td className="p-6 text-center">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust TeraBox with their most important files. 
            Get 1TB free and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full">
              Start Free Account
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;