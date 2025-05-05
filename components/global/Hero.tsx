import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

// Hero component to display a hero section with a background image and title
const Hero = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      {/* Background image changes based on the title */}
      <Image
        src={title === 'About Us' ? '/images/hero-1.jpg' : '/images/hero.png'}
        alt="hero"
        width={1500}
        height={900}
        className={clsx(
          'w-full h-[200px] md:h-[350px] object-cover',
          title === 'About Us'
            ? 'object-center'
            : 'object-right md:object-center',
        )}
      />
      {/* Overlay with title */}
      <div
        className={clsx(
          'absolute inset-0 flex flex-col items-center justify-center',
          title === 'About Us' && 'bg-dark/35',
        )}
      >
        <h1
          className={clsx(
            'text-3xl md:text-6xl text-center font-bold my-5 uppercase',
            title === 'About Us' ? 'text-white' : 'text-dark',
          )}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
