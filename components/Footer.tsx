import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryImage = ({ src, index }: { src: string; index: number }) => {
  return (
    <Image src={src} alt={'Gallery ' + (index + 1)} width={85} height={85} />
  );
};

const images = [
  '/images/gallery/gallery-1.png',
  '/images/gallery/gallery-2.png',
  '/images/gallery/gallery-3.png',
  '/images/gallery/gallery-4.png',
  '/images/gallery/gallery-5.png',
  '/images/gallery/gallery-6.png',
];

const quickLinks = [
  {
    title: 'Templates',
    href: '#',
  },
  {
    title: 'Blog and Article',
    href: '#',
  },
  {
    title: 'Integrations',
    href: '#',
  },
  {
    title: 'Webinars',
    href: '#',
  },
  {
    title: 'Privacy & Policy',
    href: '#',
  },
];

const services = [
  {
    title: 'Web development',
    href: '#',
  },
  {
    title: 'UI/UX Design',
    href: '#',
  },
  {
    title: 'Management',
    href: '#',
  },
  {
    title: 'Digital Marketing',
    href: '#',
  },
  {
    title: 'BLog News',
    href: '#',
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-dark text-white">
        <div className="max-md:p-5 flex flex-wrap flex-col gap-10 md:flex-row md:items- justify-between  lg:flex-row md:w-11/12 xl:w-10/12 mx-auto py-8 md:py-12">
          <section className="md:max-w-[380px] space-y-[24px]">
            <h3 className="font-epilogue tracking-wider font-bold flex items-center ">
              <Image src="/icons/logo.png" alt="Logo" width={50} height={50} />

              <div className="flex flex-col items-start">
                <span className="text-3xl">Harvard</span>
                <span>
                  <small className="text-sm">Polytechnic</small>
                </span>
              </div>
            </h3>
            <p>
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
              tortor aliquam nulla facilisi cras fermentum odio eu.
            </p>

            <div className="flex gap-2 items-center">
              <div className="p-2 bg-[#E9E2FF] w-fit rounded-full">
                <Facebook className="w-[15px] h-[17px] text-primary fill-primary" />
              </div>
              <div className="p-2 bg-[#E9E2FF] w-fit rounded-full">
                <Instagram className="w-[15px] h-[17px] text-primary" />
              </div>
              <div className="p-2 bg-[#E9E2FF] w-fit rounded-full">
                <Twitter className="w-[15px] h-[17px] text-primary fill-primary" />
              </div>
            </div>
          </section>
          <section className="space-y-[24px]">
            <h4 className="font-epilogue font-bold text-white text-[22px]">
              Our Services:
            </h4>

            <div className="flex flex-col gap-2">
              {services.map(
                ({ title, href }: { title: string; href: string }) => (
                  <Link
                    key={title}
                    href={href}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight />
                    <span>{title}</span>
                  </Link>
                ),
              )}
            </div>
          </section>
          <section className="space-y-[24px]">
            <h4 className="font-epilogue font-bold text-white text-[22px]">
              Quick Links:
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map(
                ({ title, href }: { title: string; href: string }) => (
                  <Link
                    key={title}
                    href={href}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight />
                    <span>{title}</span>
                  </Link>
                ),
              )}
            </div>
          </section>
          <section className="space-y-[24px] max-lg:hidden">
            <h4 className="font-epilogue font-bold text-white text-[22px]">
              Gallery
            </h4>
            <div className="flex flex-wrap gap-2.5 md:max-w-[300px]">
              {images.map((image, index) => (
                <GalleryImage key={index} index={index} src={image} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <p className="text-base text-center text-white bg-[#222222] py-5">
        <span>Copyright © 2025</span>
        <span className="text-tertiary"> Harvard Polytechnic</span>
        <span> || All Rights Reserved</span>
      </p>
    </div>
  );
};

export default Footer;
