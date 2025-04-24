'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { carouselItems } from '@/lib/data';

const Hero = () => {
  return (
    <div className="w-auto mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <Image
                src={item.image}
                alt="Slide"
                width={1500}
                height={900}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex flex-col items-center justify-center px-6">
                <h1 className="text-white text-3xl text-center md:text-5xl font-bold my-5">
                  {item.title}
                </h1>
                <p className="text-white text-lg md:text-2xl text-center max-w-3xl">
                  {item.text}
                </p>
                {/* <Button className="p-5 text-xl">{item.btn}</Button> */}
                <Button className="w-auto h-auto px-5 rounded-full mt-5">
                  <span className="text-base">{item.btn}</span>

                  <div className="rounded-full bg-primary-light p-5">
                    <ArrowRight />
                  </div>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 hidden md:flex" />
        <CarouselNext className="right-6 hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Hero;
