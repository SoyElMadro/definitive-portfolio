import type { FC } from 'react';
import { useTranslations } from 'next-intl';

interface AboutProps {
  bio: string;
}

export const About: FC<AboutProps> = ({ bio }) => {
  const t = useTranslations('About');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 animate-fade-in animation-delay-200">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t('title')}
        </h2>
        <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <p className="text-lg leading-relaxed text-card-foreground">
                {bio}
            </p>
        </div>
      </div>
    </section>
  );
};
