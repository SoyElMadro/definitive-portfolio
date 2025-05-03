import React, { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { getMessages } from 'next-intl/server';
import ClientProviders from '@/components/ClientProviders';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <ClientProviders locale={locale} messages={messages}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
