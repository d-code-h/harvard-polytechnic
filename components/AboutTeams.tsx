'use client';
import React, { useState } from 'react';
import Container from './Container';
import { teams } from '@/lib/data';
import TeamCard from './TeamCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutTeams = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // teams, // Slide 1: All team members
    teams.filter((team) => team.role === 'Executive'), // Slide 1: Executives
    teams.filter((team) => team.role === 'Head of Department'), // Slide 2: Head of Departments
    teams.filter((team) => team.role === 'Lecturer'), // Slide 3: Lecturers
    teams.filter((team) => team.role === 'Administrative Staff'), // Slide 4: Administrative Staffs
  ];

  const titles = [
    'Meet our Executives',
    'Meet our HODs',
    'Meet our Lecturers',
    'Meet our Administrative Staff',
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-dark text-center">
            {titles[currentSlide]}
          </h2>
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="rounded-full border border-primary w-7 h-7 flex justify-center items-center"
            >
              <ArrowLeft className="text-primary" size={16} />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-primary w-7 h-7 flex justify-center items-center"
            >
              <ArrowRight className="text-primary" size={16} />
            </button>
          </div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {slides[currentSlide].map((team) => (
                <TeamCard key={team.name} {...team} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default AboutTeams;
