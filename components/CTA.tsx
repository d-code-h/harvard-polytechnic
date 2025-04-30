import Image from 'next/image';
import React from 'react';
import Social from './Social';
import { ctaData } from '../lib/data';
import Container from './Container';

const CTA = () => {
  const { heading, title, phone, backgroundImage, starIcon } = ctaData;

  return (
    <div className="relative">
      <Container>
        <div className="pt-12 pb-2 flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10">
          <section className="flex-1">
            <h6 className="text-tertiary font-semibold text-2xl">{heading}</h6>

            <h2 className="font-epilogue font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mt-7 flex flex-col gap-3 z-50">
              <div className="whitespace-nowrap">{title}</div>
              <div>{phone}</div>
            </h2>
          </section>

          <Social variant="ghost" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#0E2A46] opacity-85">
          <Image
            src={starIcon}
            alt="star icon"
            width={49}
            height={49}
            className="absolute bottom-16 left-2/3 md:left-1/2 lg:left-7/12 translate-1/2 opacity-50"
          />
        </div>

        <Image
          src={backgroundImage}
          alt="cta background"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 -z-20"
        />
      </Container>
    </div>
  );
};

export default CTA;
