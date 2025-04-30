'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import CustomButton from './CustomButton';
import { links } from '@/lib/data';
import MobileNav from './MobileNav';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-wrap flex-1 justify-between items-center p-4 px-5 md:gap-5 lg:gap-0 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2 lg:mx-auto xl:mx-0">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="size-12 sm:size-20"
        />
        <h1 className="tracking-wider font-extrabold font-serif uppercase text-xl sm:text-2xl md:text-4xl -ms-3">
          Harvard
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:hidden md:flex flex-wrap items-center order-3 lg:order-2 mx-auto">
        <nav className="flex gap-4">
          {links.map(({ href, label }, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="text-dark rounded-full hover:text-primary transition-all duration-300"
            >
              <Link
                href={href}
                className={cn(
                  pathname === href
                    ? 'border rounded-b-full border-primary text-primary'
                    : 'text-gray-600',
                )}
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <div className="order-2 lg:order-3 max-md:hidden lg:hidden">
        <CustomButton text="Apply Now" />
      </div>

      <div className="hidden lg:flex flex-wrap items-center order-3 lg:order-2 max-xl:mx-auto">
        <nav className="flex gap-4">
          {links.map(({ href, label }, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="text-dark rounded-full hover:text-primary transition-all duration-300"
            >
              <Link
                href={href}
                className={cn(
                  pathname === href
                    ? 'border rounded-b-full border-primary text-primary'
                    : 'text-gray-600',
                )}
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="order-2 lg:order-3 max-md:hidden">
          <CustomButton text="Apply Now" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
