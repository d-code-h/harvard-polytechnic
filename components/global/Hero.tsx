import Image from 'next/image';
import React from 'react';

const Hero = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <Image
        src="/images/hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-[200px] md:h-[300px] object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-dark text-3xl md:text-6xl text-center font-bold my-5 uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
