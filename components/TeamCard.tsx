import { ChevronRightCircle, Share2 } from 'lucide-react';
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
    <div className="relative w-fit h-fit border-8 rounded-xl border-primary bg-primary">
      <Image
        src={src}
        alt={name}
        width={370}
        height={368}
        className="w-[355px] h-[360px] object-cover "
      />
      <div className="absolute bottom-4 w-full px-2 sm:px-1 md:px-2 lg:px-1 xl:px-3">
        <div className="bg-white mx-auto px-6 sm:px-3 md:px-4 lg:px-3 py-4 rounded-lg flex items-center justify-between gap-auto">
          <section>
            <h6 className="text-dark font-epilogue text-xl sm:text-lg md:text-xl lg:text-lg font-bold whitespace-nowrap">
              {name}
            </h6>
            <p className="py-1 text-primary text-sm">{position}</p>
          </section>
          <div className="flex items-center">
            <ChevronRightCircle
              size={32}
              className="text-primary justify-self-end"
            />
          </div>
        </div>
      </div>
      <div className="p-2 bg-primary rounded-full absolute top-4 right-4 flex items-center justify-center">
        <Share2 size={24} className="text-white" />
      </div>
    </div>
  );
};

export default TeamCard;
