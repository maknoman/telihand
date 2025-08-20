import React from 'react';
import { Card, CardContent } from './ui/card';
import Header from './Header';
import Footer from './Footer';

const TermsPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using TeraBox, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content."
      ]
    },
    {
      title: "Description of Service",
      content: [
        "TeraBox provides cloud storage and file synchronization services.",
        "The service allows you to store, access, and share files across multiple devices.",
        "We provide 1024GB of free storage with options for additional paid storage.",
        "Service availability may vary and we do not guarantee uninterrupted access."
      ]
    },
    {
      title: "User Accounts and Security",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate our terms of service."
      ]
    },
    {
      title: "Acceptable Use Policy",
      content: [
        "You may not use the service for any illegal or unauthorized purpose.",
        "You may not upload, store, or share content that is harmful, offensive, or violates intellectual property rights.",
        "You may not attempt to interfere with the proper working of the service.",
        "You may not use the service to distribute malware, spam, or other malicious content."
      ]
    },
    {
      title: "Content and Intellectual Property",
      content: [
        "You retain all rights to the content you upload to TeraBox.",
        "By uploading content, you grant us the right to store, process, and deliver your content as part of the service.",
        "You are responsible for ensuring you have the right to upload and share all content on your account.",
        "We respect intellectual property rights and will respond to valid DMCA takedown notices."
      ]
    },
    {
      title: "Storage Limits and File Management",
      content: [
        "Free accounts include 1024GB of storage space.",
        "Files may be subject to size limitations as specified in our documentation.",
        "We reserve the right to delete inactive accounts after extended periods of inactivity.",
        "You are responsible for backing up important data stored in your account."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for details on how we handle your data.",
        "We implement industry-standard security measures to protect your data.",
        "We do not access or scan the content of your files except as necessary to provide the service.",
        "You may delete your data at any time, and we will remove it from our systems."
      ]
    },
    {
      title: "Termination",
      content: [
        "You may terminate your account at any time by deleting your account through the service.",
        "We may terminate or suspend your account if you violate these terms of service.",
        "Upon termination, your right to use the service will cease immediately.",
        "We will provide you with a reasonable opportunity to retrieve your data before account deletion."
      ]
    },
    {
      title: "Disclaimers and Limitation of Liability",
      content: [
        "The service is provided 'as is' without warranties of any kind.",
        "We do not guarantee that the service will be uninterrupted or error-free.",
        "We are not liable for any direct, indirect, incidental, or consequential damages.",
        "Our total liability to you for any claims related to the service is limited to the amount you paid us in the past 12 months."
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to TeraBox! These Terms of Service ("Terms") govern your use of TeraBox's 
              cloud storage services. By using our service, you agree to these terms. Please read 
              them carefully. If you don't agree to these terms, you may not use TeraBox.
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
              Contact Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@terabox.com</p>
                <p><strong>Address:</strong> TeraBox Legal Team, 123 Cloud Street, Tech Valley, CA 94000</p>
                <p><strong>Phone:</strong> +1-800-TERABOX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates Notice */}
        <Card className="mt-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">
              Changes to Terms
            </h3>
            <p className="text-orange-800">
              We may revise these Terms of Service from time to time. The most current version will 
              always be at terabox.com/terms. If we make material changes, we'll notify you by email 
              or through the service. By continuing to use TeraBox after changes become effective, 
              you agree to the revised terms.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsPage;