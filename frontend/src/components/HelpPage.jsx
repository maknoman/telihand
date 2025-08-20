import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Search, Book, MessageCircle, Phone, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: ['How to create an account', 'First upload', 'Setting up sync', 'Mobile app setup']
    },
    {
      title: 'File Management',
      icon: '📁',
      articles: ['Upload files', 'Organize folders', 'Share files', 'Version history']
    },
    {
      title: 'Security & Privacy',
      icon: '🔒',
      articles: ['Two-factor authentication', 'Data encryption', 'Privacy settings', 'Account security']
    },
    {
      title: 'Troubleshooting',
      icon: '🔧',
      articles: ['Sync issues', 'Upload problems', 'Login troubles', 'Performance issues']
    },
    {
      title: 'Account & Billing',
      icon: '💳',
      articles: ['Upgrade account', 'Billing questions', 'Cancel subscription', 'Storage limits']
    },
    {
      title: 'Mobile Apps',
      icon: '📱',
      articles: ['Download apps', 'Mobile sync', 'Offline files', 'Photo backup']
    }
  ];

  const faqItems = [
    {
      question: "How much free storage do I get with TeraBox?",
      answer: "TeraBox provides 1024GB (1TB) of free storage space when you create an account. This is significantly more than most other cloud storage providers."
    },
    {
      question: "Is my data secure on TeraBox?",
      answer: "Yes, your data is highly secure. We use industry-standard encryption for data in transit and at rest. All files are encrypted before being stored on our servers, and we never access your personal files."
    },
    {
      question: "Can I access my files offline?",
      answer: "Yes, you can mark files for offline access in our mobile and desktop apps. These files will be downloaded to your device and available even without an internet connection."
    },
    {
      question: "How do I share files with others?",
      answer: "You can share files by right-clicking on them and selecting 'Share'. You can create shareable links, invite people by email, or set specific permissions for different users."
    },
    {
      question: "What file types are supported?",
      answer: "TeraBox supports virtually all file types including documents, images, videos, audio files, archives, and more. There are no restrictions on file formats."
    },
    {
      question: "How do I upgrade my storage?",
      answer: "You can upgrade your storage by going to Settings > Storage in your account, or visit our Pricing page. We offer various plans to suit different needs."
    },
    {
      question: "Can I recover deleted files?",
      answer: "Yes, deleted files are moved to the Trash and can be recovered within 30 days. After 30 days, files are permanently deleted and cannot be recovered."
    },
    {
      question: "Is there a file size limit?",
      answer: "Individual files can be up to 20GB in size when uploaded through the web interface. Desktop and mobile apps support even larger files up to 50GB."
    }
  ];

  const supportOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      action: 'Send Email',
      link: 'mailto:support@terabox.com'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: MessageCircle,
      action: 'Start Chat',
      link: '#'
    },
    {
      title: 'Phone Support',
      description: 'Call us during business hours',
      icon: Phone,
      action: 'Call Now',
      link: 'tel:+1-800-TERABOX'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other TeraBox users',
      icon: Book,
      action: 'Visit Forum',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to your questions, browse our guides, or get in touch with our support team.
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(option.link, '_blank')}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Support
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HelpPage;