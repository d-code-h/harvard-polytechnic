import Hero from '@/components/global/Hero';
import Profile from '@/components/Profile';
import Testimonies from '@/components/Testimonies';
import React from 'react';
import Footer from '@/components/Footer';
import AboutTeams from '@/components/AboutTeams';

const AboutUs = () => {
  return (
    <main>
      <Hero title="About Us" />
      <Profile />
      <Testimonies />
      <AboutTeams />
      <Footer />
    </main>
  );
};

export default AboutUs;
