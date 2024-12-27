'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constant';

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        {/* Hamburger Menu Trigger */}
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="Open menu"
            width={25}
            height={25}
          />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="bg-white border-none p-4">
          <nav className="flex flex-col gap-6">
            {/* Logo Section */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Company logo"
                width={200}
                height={120}
                className="mb-10"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 text-gray-500">
              {sidebarLinks.map(({ route, label }) => (
                <SheetClose asChild key={route}>
                  <Link
                    href={route}
                    className={`text-base font-semibold text-gray-700 hover:text-yellow-500 ${
                      pathname === route ? 'text-yellow-500' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
