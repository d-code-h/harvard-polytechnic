import React from 'react';
import Container from './Container';
import { teams } from '@/lib/data';
import TeamCard from './TeamCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AboutTeams = () => {
  return (
    <Container>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-dark text-center">
            Meet our Staffs
          </h2>
          <div className="flex items-center gap-6">
            <div className="rounded-full border border-primary w-7 h-7 flex justify-center items-center">
              <ArrowLeft className="text-primary" size={16} />
            </div>
            <div className="rounded-full border border-primary w-7 h-7 flex justify-center items-center">
              <ArrowRight className="text-primary" size={16} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutTeams;
