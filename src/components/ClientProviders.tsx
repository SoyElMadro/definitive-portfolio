'use client';

import React, { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import { Toaster } from '@/components/ui/toaster';

interface ClientProvidersProps {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
}

export default function ClientProviders({ locale, messages, children }: ClientProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <Toaster />
    </NextIntlClientProvider>
  );
}