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
import Link from 'next/link';
import clsx from 'clsx';

const Hero = () => {
  return (
    <div className="w-auto mx-auto">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={item.image} className="relative">
              <Image
                src={item.image}
                alt="Slide"
                width={1300}
                height={800}
                className={clsx('w-full h-[600px] object-cover object-center')}
              />
              <div
                className={clsx(
                  'absolute inset-0 flex flex-col items-center justify-center px-6',
                  index === 2 ? 'bg-black/25' : 'bg-black/35',
                )}
              >
                <h1 className="text-white text-3xl text-center md:text-5xl font-poppins font-bold my-5">
                  {item.title}
                </h1>
                <p className="text-white text-lg md:text-2xl text-center max-w-3xl">
                  {item.text}
                </p>
                <Link href={item.href}>
                  <Button className="w-auto h-auto px-5 rounded-full mt-5">
                    <span className="text-base">{item.btn}</span>

                    <div className="rounded-full bg-primary-light p-5">
                      <ArrowRight />
                    </div>
                  </Button>
                </Link>
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
