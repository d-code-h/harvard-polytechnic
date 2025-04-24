'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import MobileNav from './MobileNav';
import { links } from '@/lib/data';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-wrap flex-1 flex-row md:gap justify-between lg:justify-center items-center p-4 md:gap-5 lg:gap-0">
      <div className="flex items-center">
        <Image src="/icons/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="tracking-wider font-extrabold font-serif uppercase text-4xl -ms-3">
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
              className="text-background-dark rounded-full"
            >
              <Link
                href={href}
                className={cn(
                  pathname.includes(href)
                    ? 'border rounded-b-full border-primary text-primary'
                    : null,
                )}
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <Button className="w-auto h-auto px-5 rounded-full hidden md:flex md:order-2 lg:order-3">
        <span className="text-base">Create Account</span>

        <div className="rounded-full bg-primary-light p-5">
          <ArrowRight />
        </div>
      </Button>

      {/* Mobile Navigation */}

      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
