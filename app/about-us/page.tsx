import Hero from '@/components/global/Hero';
import Profile from '@/components/Profile';
import Testimonies from '@/components/Testimonies';
import React from 'react';
import Footer from '@/components/Footer';
import AboutTeams from '@/components/AboutTeams';
import SuccessRate from '@/components/SuccessRate';

const AboutUs = () => {
  return (
    <main>
      <Hero title="About Us" />
      <div className="relative">
        <Profile about />
        <SuccessRate />
      </div>
      <Testimonies about />
      <AboutTeams />
      <Footer />
    </main>
  );
};

export default AboutUs;
