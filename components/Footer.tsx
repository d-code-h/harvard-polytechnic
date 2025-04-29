import { galleryImages, quickLinks, services, footerData } from '@/lib/data';
import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryImage = ({ src, index }: { src: string; index: number }) => {
  return (
    <Image src={src} alt={'Gallery ' + (index + 1)} width={85} height={85} />
  );
};

const Footer = () => {
  const {
    logo,
    description,
    socialIcons,
    servicesHeading,
    quickLinksHeading,
    galleryHeading,
    copyright,
  } = footerData;

  return (
    <div>
      <div className="bg-dark text-white">
        <div className="max-md:p-5 flex flex-wrap flex-col gap-10 md:flex-row md:items- justify-between lg:flex-row md:w-11/12 xl:w-10/12 mx-auto py-8 md:py-12">
          <section className="md:max-w-[380px] space-y-[24px]">
            <h3 className="font-epilogue tracking-wider font-bold flex items-center ">
              <Image src={logo.src} alt={logo.alt} width={50} height={50} />
              <div className="flex flex-col items-start">
                <span className="text-3xl">{logo.name}</span>
                <span>
                  <small className="text-sm">{logo.subName}</small>
                </span>
              </div>
            </h3>
            <p>{description}</p>

            <div className="flex gap-2 items-center">
              {socialIcons.map(({ Icon, bgColor, className }, index) => {
                const IconComponent =
                  Icon === 'Facebook'
                    ? Facebook
                    : Icon === 'Instagram'
                    ? Instagram
                    : Twitter;
                return (
                  <div
                    key={index}
                    className={`p-2 ${bgColor} w-fit rounded-full`}
                  >
                    <IconComponent
                      className={`w-[15px] h-[17px] ${className}`}
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="space-y-[24px]">
            <h4 className="font-epilogue font-bold text-white text-[22px]">
              {servicesHeading}
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
              {quickLinksHeading}
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
              {galleryHeading}
            </h4>
            <div className="flex flex-wrap gap-2.5 md:max-w-[300px]">
              {galleryImages.map((image, index) => (
                <GalleryImage key={index} index={index} src={image} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <p className="text-base text-center text-white bg-[#222222] py-5">
        {copyright}
      </p>
    </div>
  );
};

export default Footer;
