'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';
import { locales } from '@/i18n';

export function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    const newUrl = `/${nextLocale}${pathname.slice(3)}`;
    router.replace(newUrl);
  };

  return (
    <Select value={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-auto bg-transparent border-none shadow-none text-sm focus:ring-0 focus:ring-offset-0 gap-1 px-2">
        <Globe className="h-4 w-4" />
        <SelectValue placeholder={t('select')} />
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[100px]">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {t(loc)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
