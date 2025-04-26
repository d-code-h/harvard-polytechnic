import React from 'react';
import CustomButton from './CustomButton';
import TeamCard from './TeamCard';

const teams = [
  {
    name: 'Esther Howard',
    position: 'Junior Instructor',
    src: '/images/teams/team-1.png',
  },
  {
    name: 'Beverly Hathcock',
    position: 'Junior Instructor',
    src: '/images/teams/team-2.png',
  },
  {
    name: 'Donald Gonzales',
    position: 'Junior Instructor',
    src: '/images/teams/team-3.png',
  },
  {
    name: 'Eddie Lenz',
    position: 'Junior Instructor',
    src: '/images/teams/team-4.png',
  },
];
const Teams = () => {
  return (
    <div className="max-md:p-5 flex flex-col items-center md:flex-row lg:w-10/12 mx-auto">
      <div>
        <div className="space-y-7">
          <section className="space-y-4">
            <h6 className="text-primary text-sm bg-primary/25 px-3 py-2 uppercase w-fit rounded-lg">
              Our Instructor
            </h6>
            <h4 className=" font-epilogue text-5xl font-bold text-dark">
              Meet Our Expert Instructor
            </h4>
          </section>

          <p className="text-lg text-[#333931] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>
        </div>
        <CustomButton text="View All Team" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {teams.map((team) => (
          <TeamCard key={team.name} {...team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
