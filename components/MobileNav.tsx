import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { links } from '@/lib/data';
import Image from 'next/image';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" asChild>
            <div>
              <Menu className="size-7" />
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-2 lg:mx-auto xl:mx-0">
                <Image
                  src="/icons/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="size-12 sm:size-20"
                />
                <h1 className="tracking-wider font-extrabold font-serif uppercase text-xl sm:text-2xl md:text-4xl -ms-3 flex flex-col">
                  <span>Harvard</span>
                  <span className="text-sm">Polytechnic</span>
                </h1>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2 text-lg font-medium rounded-md transition-colors',
                      pathname.includes(link.href)
                        ? 'bg-primary-light text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
