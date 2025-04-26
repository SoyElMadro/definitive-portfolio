import type { FC } from 'react';
import { useTranslations } from 'next-intl';

interface FooterProps {
    name: string;
}

export const Footer: FC<FooterProps> = ({ name }) => {
  const t = useTranslations('Footer'); // Use translations hook
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {currentYear} {name}. {t('rightsReserved')}</p>
        {/* Maybe: Add links to social media or other relevant info */}
      </div>
    </footer>
  );
};
