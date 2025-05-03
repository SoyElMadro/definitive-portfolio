'use client';

import { Github, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { FC } from 'react';
import { useTranslations } from 'next-intl';

interface HeroProps {
  name: string;
  surname: string;
  country: string;
  age: number;
  githubLink: string;
  linkedInLink: string;
  cvLink: string;
}

export const Hero: FC<HeroProps> = ({ name, surname, country, age, githubLink, linkedInLink, cvLink }) => {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className="bg-secondary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-screen-lg text-center px-4 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          {name} <span className="text-accent">{surname}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl lg:text-2xl">
          {t('programmer')} | {t('yearsOld', { age })} | {t('basedIn', { country })} <MapPin className="inline-block h-5 w-5 ml-1 align-text-bottom" />
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button asChild variant="default" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> {t('github')}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href={linkedInLink} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> {t('linkedIn')}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href="#projects">
              {t('viewProjects')}
            </Link>
          </Button>
          <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105">
            <Link className="hover:text-gray-100" href="#contact">
              {t('contactMe')}
            </Link>
          </Button>
        </div>
        <div className="mt-6">
          <Button asChild variant="default" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href={cvLink} target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-5 w-5" /> {t('downloadCV')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
