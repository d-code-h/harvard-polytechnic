'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about-us',
    label: 'About Us',
  },
  {
    href: '/courses',
    label: 'Courses',
  },
  {
    href: '/pages',
    label: 'Pages',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex gap-20 justify-center items-center p-4">
      <div className="flex items-center">
        <Image src="/icons/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="tracking-wider font-extrabold font-serif uppercase text-4xl -ms-3">
          Harvard
        </h1>
      </div>
      <div className="flex flex-wrap lg:gap-40 items-center">
        <nav>
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
                    ? 'border rounded-bl-full border-primary text-primary'
                    : null,
                )}
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>

        <Button className="w-auto h-auto px-5 rounded-full">
          <span className="text-base">Create Account</span>

          <div className="rounded-full bg-primary-light p-5">
            <ArrowRight />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
