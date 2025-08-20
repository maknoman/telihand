import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for personal use',
      storage: '1024GB',
      features: [
        '1TB cloud storage',
        'File sync across devices',
        'Basic sharing',
        'Mobile apps',
        'Web access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Great for professionals',
      storage: '5TB',
      features: [
        '5TB cloud storage',
        'Advanced sharing controls',
        'Version history',
        'Priority support',
        'Advanced security',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$19.99',
      period: '/month',
      description: 'Ideal for teams',
      storage: '10TB',
      features: [
        '10TB cloud storage',
        'Admin controls',
        'Team management',
        'Advanced analytics',
        'API access',
        'Custom branding',
        '24/7 priority support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your storage needs. Start free and upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-600 shadow-xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-blue-600">{plan.storage}</div>
                  <div className="text-sm text-gray-500">storage included</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600 mb-4">Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 mb-4">All paid plans come with a 30-day free trial. No credit card required.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What happens to my files if I downgrade?</h3>
              <p className="text-gray-600 mb-4">Your files remain safe. You'll just have limited access until you free up space or upgrade.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600 mb-4">Yes, we offer a 30-day money-back guarantee on all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PricingPage;