import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales: locales,

  defaultLocale: defaultLocale
});

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
