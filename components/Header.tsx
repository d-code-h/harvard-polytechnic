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
    <header className="flex flex-wrap flex-1 flex-row md:gap justify-between lg:justify-center items-center p-4 md:gap-5 lg:gap-0">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="size-12 sm:size-20"
        />
        <h1 className="tracking-wider font-extrabold font-serif uppercase text-2xl  md:text-4xl -ms-3">
          Harvard
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap items-center md:order-3 lg:order-2 mx-auto">
        <nav className="max-lg:mb-5">
          {links.map(({ href, label }, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="text-dark rounded-full"
            >
              <Link
                href={href}
                className={cn(
                  pathname === href
                    ? 'border rounded-b-full border-primary text-primary'
                    : null,
                )}
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>

        <CustomButton text="Create Account" />
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
