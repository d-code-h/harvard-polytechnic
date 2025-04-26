import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TeamCard = ({
  name,
  position,
  src,
}: {
  name: string;
  position: string;
  src: string;
}) => {
  return (
    <div className="relative">
      <Image src={src} alt={name} width={380} height={380} />
      <div className="absolute bottom-2 w-full">
        <div className="bg-white w-fit mx-auto">
          <section>
            <h6>{name}</h6>
            <p>{position}</p>
          </section>
          <div>
            <ArrowRight />
            <div className="w-6 h-6 -ml-3 bg-primary/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
