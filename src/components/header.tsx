'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const t = useTranslations('Header');

  const navItems = [
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#skills' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300">
      {/* Use max-w-screen-xl or similar for wider screens */}
      <div className="container flex h-14 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-4 flex items-center space-x-2 md:mr-6 transition-transform duration-300 hover:scale-105">
          <Code className="h-6 w-6 text-primary transition-colors duration-200" />
          {/* Hide text on very small screens if needed */}
          <span className="font-bold sm:inline">{t('portfolio')}</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-4 md:flex md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary hover:underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

         {/* Language Switcher (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 ml-auto">
           <LanguageSwitcher />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex flex-1 items-center justify-end md:hidden">
           <Sheet>
             <SheetTrigger asChild>
               <Button variant="ghost" size="icon" className="shrink-0 transition-transform duration-300 hover:scale-110">
                 <Menu className="h-6 w-6" />
                 <span className="sr-only">{t('toggleMenu')}</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-[280px] sm:w-[320px] transition-transform duration-300 ease-in-out flex flex-col">
              <nav className="flex flex-col gap-4 mt-8">
                 <SheetClose asChild>
                    <Link href="/" className="mb-4 flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                        <Code className="h-6 w-6 text-primary transition-colors duration-200" />
                        <span className="font-bold">{t('portfolio')}</span>
                    </Link>
                 </SheetClose>
                 {navItems.map((item) => (
                   <SheetClose asChild key={item.label}>
                     <Link
                       href={item.href}
                       className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground hover:pl-4"
                     >
                       {item.label}
                     </Link>
                   </SheetClose>
                 ))}
               </nav>
                {/* Language Switcher (Mobile - at the bottom) */}
                <div className="mt-auto pt-4 border-t">
                    <LanguageSwitcher />
                </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}
