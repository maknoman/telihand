import React from 'react';
import { Card, CardContent } from './ui/card';
import { Users, Award, Globe, Shield } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  const stats = [
    { label: 'Users Worldwide', value: '400M+', icon: Users },
    { label: 'Files Stored', value: '50B+', icon: Award },
    { label: 'Countries', value: '190+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Shield }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Former Google engineer with 15+ years in cloud technology.'
    },
    {
      name: 'David Rodriguez',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Expert in distributed systems and data security.'
    },
    {
      name: 'Lisa Park',
      role: 'VP of Product',
      image: '👩‍🚀',
      description: 'Product visionary focused on user experience.'
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Security',
      image: '👨‍🔬',
      description: 'Cybersecurity specialist ensuring data protection.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About TeraBox
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make cloud storage simple, secure, and accessible for everyone. 
            Since 2018, we've been helping millions of users store, sync, and share their files safely.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                TeraBox was born from a simple frustration: existing cloud storage solutions were 
                either too expensive, too complicated, or didn't offer enough storage. Our founders, 
                a team of engineers from leading tech companies, decided to build something better.
              </p>
              <p>
                Starting with a vision to provide 1TB of free storage to everyone, we've grown from 
                a small startup to a global platform trusted by over 400 million users worldwide. 
                Our commitment to privacy, security, and user experience drives everything we do.
              </p>
              <p>
                Today, TeraBox continues to innovate with AI-powered features, advanced security, 
                and seamless cross-platform synchronization. We believe that your files should be 
                accessible anywhere, anytime, without compromise.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy First</h3>
              <p className="text-gray-600">
                Your data belongs to you. We use end-to-end encryption and never access your files.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">User-Centric</h3>
              <p className="text-gray-600">
                Every feature we build starts with understanding our users' real needs and pain points.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in security, performance, and user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;