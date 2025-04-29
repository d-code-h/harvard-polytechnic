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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost">
            <Menu className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Harvard</SheetTitle>
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
