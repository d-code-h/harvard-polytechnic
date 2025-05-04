import React from 'react';
import Container from './Container';
import TestimonyCard from './TestimonyCard';
import { testimonies } from '@/lib/data';

const Testimonies = () => {
  return (
    <div style={{ backgroundImage: "url('/images/testimony.png')" }}>
      <Container>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-dark text-center mb-8">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonies.map((testimony, index) => (
              <TestimonyCard key={index} {...testimony} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonies;
