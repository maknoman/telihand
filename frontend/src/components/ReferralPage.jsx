import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Gift, Users, Star, Copy, Mail, MessageSquare, Facebook, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Header from './Header';
import Footer from './Footer';

const ReferralPage = () => {
  const [referralCode] = useState('TERABOX2025');
  const { toast } = useToast();

  const benefits = [
    {
      icon: Gift,
      title: 'Earn Extra Storage',
      description: 'Get 20GB of bonus storage for each friend who joins TeraBox using your link.',
      reward: '+20GB per referral'
    },
    {
      icon: Users,
      title: 'Help Your Friends',
      description: 'Your friends get an extra 10GB on top of their 1TB free storage when they sign up.',
      reward: '+10GB for friends'
    },
    {
      icon: Star,
      title: 'Unlock Premium Features',
      description: 'Refer 10 friends and unlock premium features for free for 6 months.',
      reward: 'Premium access'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Share Your Link',
      description: 'Send your unique referral link to friends via email, social media, or messaging apps.',
      icon: '📤'
    },
    {
      step: 2,
      title: 'Friends Sign Up',
      description: 'When your friends create a TeraBox account using your link, they get bonus storage.',
      icon: '📝'
    },
    {
      step: 3,
      title: 'You Both Win',
      description: 'You earn bonus storage and rewards while your friends get extra space for free.',
      icon: '🎉'
    }
  ];

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(`https://terabox.com/invite/${referralCode}`);
        toast({ title: 'Link copied!', description: 'Referral link has been copied to clipboard.' });
      }
    },
    {
      name: 'Email',
      icon: Mail,
      action: () => {
        const subject = encodeURIComponent('Get 1TB Free Cloud Storage with TeraBox!');
        const body = encodeURIComponent(`Hi! I've been using TeraBox for cloud storage and I love it. They're giving away 1TB of free storage, plus you'll get an extra 10GB when you sign up with my link: https://terabox.com/invite/${referralCode}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
      }
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      action: () => {
        const text = encodeURIComponent(`Check out TeraBox! Get 1TB of free cloud storage + extra 10GB with my referral link: https://terabox.com/invite/${referralCode}`);
        window.open(`https://wa.me/?text=${text}`);
      }
    },
    {
      name: 'Twitter',
      icon: Twitter,
      action: () => {
        const text = encodeURIComponent(`Just discovered @TeraBox - 1TB of free cloud storage! Get extra 10GB when you sign up with my link: https://terabox.com/invite/${referralCode} #CloudStorage #Free`);
        window.open(`https://twitter.com/intent/tweet?text=${text}`);
      }
    }
  ];

  const stats = [
    { label: 'Total Referrals', value: '0' },
    { label: 'Storage Earned', value: '0 GB' },
    { label: 'This Month', value: '0' },
    { label: 'Success Rate', value: '0%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-6 py-2">
            🎁 Referral Program
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Share TeraBox, Earn More Storage
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invite your friends to TeraBox and earn bonus storage for every successful referral. 
            The more friends you invite, the more storage you get!
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <Badge className="bg-green-100 text-green-800">{benefit.reward}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Referral Link */}
        <Card className="mb-16 border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <Input
                value={`https://terabox.com/invite/${referralCode}`}
                readOnly
                className="flex-1 text-center bg-white"
              />
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText(`https://terabox.com/invite/${referralCode}`);
                  toast({ title: 'Copied!', description: 'Referral link copied to clipboard.' });
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {shareOptions.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={option.action}
                  className="flex items-center justify-center space-x-2"
                >
                  <option.icon className="w-4 h-4" />
                  <span>{option.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Your Referral Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Program Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Earn 20GB of bonus storage for each successful referral (friend signs up and verifies email).
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Your referred friends receive 10GB of bonus storage on top of the 1TB free account.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bonus storage is credited within 24 hours of successful referral.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Maximum 50 referrals per month. No limit on total referrals.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Self-referrals and fake accounts are prohibited and will result in account suspension.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                TeraBox reserves the right to modify or terminate this program at any time.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Start Earning Today!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Share TeraBox with your network and help them discover the best free cloud storage solution.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 px-12 py-4 text-lg rounded-full"
            onClick={() => {
              navigator.clipboard.writeText(`https://terabox.com/invite/${referralCode}`);
              toast({ title: 'Link copied!', description: 'Start sharing your referral link now!' });
            }}
          >
            Copy My Referral Link
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReferralPage;