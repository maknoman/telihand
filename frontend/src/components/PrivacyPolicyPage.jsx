import React from 'react';
import { Card, CardContent } from './ui/card';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Account Information: When you create a TeraBox account, we collect your name, email address, and password.",
        "File Data: We store the files you upload to our service, but we do not access or scan the content of your files.",
        "Usage Information: We collect information about how you use TeraBox, including file operations and access patterns.",
        "Device Information: We may collect information about the devices you use to access TeraBox, including IP address and browser type."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our cloud storage service",
        "To authenticate your account and ensure security",
        "To improve our services and develop new features",
        "To communicate with you about your account and our services",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties.",
        "We may share information when required by law or to protect our rights.",
        "We use trusted service providers who assist in operating our service, all bound by confidentiality agreements.",
        "In case of a merger or acquisition, user information may be transferred to the new entity."
      ]
    },
    {
      title: "Data Security",
      content: [
        "All files are encrypted during transmission and storage using industry-standard encryption.",
        "We implement multiple layers of security to protect your data.",
        "Access to user data is strictly limited to authorized personnel.",
        "We regularly audit our security practices and update them as needed."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "You can access, update, or delete your account information at any time.",
        "You can download or delete your files whenever you choose.",
        "You can opt out of non-essential communications from us.",
        "You can request a copy of the personal information we have about you."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your account information for as long as your account is active.",
        "Deleted files are permanently removed from our systems within 30 days.",
        "Some information may be retained for legal compliance or security purposes.",
        "You can request complete account deletion at any time."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At TeraBox, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our cloud storage service. 
              Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the application.
            </p>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {index + 1}. {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 leading-relaxed">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us About Privacy
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@terabox.com</p>
                <p><strong>Address:</strong> TeraBox Privacy Team, 123 Cloud Street, Tech Valley, CA 94000</p>
                <p><strong>Phone:</strong> +1-800-TERABOX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates Notice */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Policy Updates
            </h3>
            <p className="text-blue-800">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;