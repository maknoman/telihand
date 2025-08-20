import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Search, Image, FileText, Zap, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TeraAIPage = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find files instantly using natural language queries. Search for "vacation photos from last summer" or "budget spreadsheet from March".',
      status: 'Available Now'
    },
    {
      icon: Image,
      title: 'Visual Recognition',
      description: 'Automatically tag and organize photos by content, faces, and locations. Never lose track of your memories again.',
      status: 'Available Now'
    },
    {
      icon: FileText,
      title: 'Document Analysis',
      description: 'Extract key information from documents, generate summaries, and make your files searchable by content.',
      status: 'Beta'
    },
    {
      icon: Zap,
      title: 'Auto-Organization',
      description: 'Let AI automatically organize your files into smart folders based on content, type, and usage patterns.',
      status: 'Coming Soon'
    },
    {
      icon: Users,
      title: 'Collaboration AI',
      description: 'AI-powered suggestions for sharing, team collaboration, and workflow optimization.',
      status: 'Coming Soon'
    },
    {
      icon: Brain,
      title: 'Predictive Insights',
      description: 'Get intelligent recommendations for storage optimization and file management.',
      status: 'Coming Soon'
    }
  ];

  const useCases = [
    {
      title: 'Creative Professionals',
      description: 'Organize thousands of design files, photos, and videos with AI-powered tagging and smart search.',
      icon: '🎨'
    },
    {
      title: 'Business Teams',
      description: 'Streamline document workflows with automatic categorization and intelligent file suggestions.',
      icon: '💼'
    },
    {
      title: 'Researchers',
      description: 'Quickly find relevant documents and extract key insights from large research collections.',
      icon: '🔬'
    },
    {
      title: 'Personal Users',
      description: 'Keep your personal files organized effortlessly with AI that learns from your habits.',
      icon: '👤'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 text-lg px-6 py-2">
            🤖 Powered by Advanced AI
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Tera AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of cloud storage with artificial intelligence. Tera AI makes your files smarter, 
            more organized, and easier to find than ever before.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full">
              Try Tera AI Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* AI Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <Badge 
                      className={`
                        ${feature.status === 'Available Now' ? 'bg-green-100 text-green-800' : ''}
                        ${feature.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${feature.status === 'Coming Soon' ? 'bg-gray-100 text-gray-800' : ''}
                      `}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How Tera AI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Analyze Your Files</h3>
              <p className="text-gray-600">
                Tera AI scans and understands your files, extracting metadata, content, and context.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Learn Your Patterns</h3>
              <p className="text-gray-600">
                The AI learns from your usage patterns and preferences to provide personalized insights.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Optimize & Suggest</h3>
              <p className="text-gray-600">
                Get intelligent recommendations for organization, sharing, and file management.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Privacy-First AI</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your privacy is our priority. Tera AI processes your files securely and never shares 
              your personal data. All AI analysis happens with full encryption, and you maintain 
              complete control over your information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold mb-2">End-to-End Encryption</h4>
                <p className="text-gray-600 text-sm">All AI processing is encrypted</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚫</span>
                </div>
                <h4 className="font-semibold mb-2">No Data Sharing</h4>
                <p className="text-gray-600 text-sm">Your data never leaves TeraBox</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h4 className="font-semibold mb-2">Full Control</h4>
                <p className="text-gray-600 text-sm">Disable AI features anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Tera AI?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join millions of users who are already experiencing the future of cloud storage.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-12 py-4 text-lg rounded-full">
            Get Started with Tera AI
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TeraAIPage;