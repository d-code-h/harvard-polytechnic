import React from 'react';
import CustomButton from './CustomButton';
import TeamCard from './TeamCard';
import { teams, teamsData } from '@/lib/data';

const Teams = () => {
  const { heading, title, description, buttonText } = teamsData;

  return (
    <div className="max-md:p-5 flex flex-col gap-12 xl:gap-16 items-center justify-between lg:flex-row md:w-11/12 mx-auto my-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 xl:w-2/6 2xl:flex-1">
        <div className="space-y-7">
          <section className="space-y-4">
            <h6 className="text-primary text-sm bg-primary/25 px-3 py-2 uppercase w-fit rounded-lg">
              {heading}
            </h6>
            <h4 className="font-epilogue text-4xl md:text-5xl font-bold text-dark">
              {title}
            </h4>
          </section>

          <p className="text-base md:text-lg text-[#333931] mb-4">
            {description}
          </p>
        </div>
        <CustomButton text={buttonText} />
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 justify-items-center w-full flex-1 ">
        {teams.map((team) => (
          <TeamCard key={team.name} {...team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
