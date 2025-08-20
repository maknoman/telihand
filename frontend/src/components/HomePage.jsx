import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SyncSection from './SyncSection';
import SecuritySection from './SecuritySection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SyncSection />
      <SecuritySection />
      <Footer />
    </div>
  );
};

export default HomePage;