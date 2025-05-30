'use client';

import { Globe } from 'lucide-react';

import { useLanguage } from '@/i18n/LanguageContext';
import { getDictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/i18n-config';

export default function LanguageSwitcher() {
  const { locale, setLocale, setDictionary } = useLanguage();

  const toggleLanguage = async () => {
    const newLocale: Locale = locale === 'en' ? 'vi' : 'en';
    const newDictionary = await getDictionary(newLocale);
    setLocale(newLocale);
    setDictionary(newDictionary);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
    >

    <span className="flex items-center gap-1">
      <Globe size={16} />
      {locale === 'en' ? 'VI' : 'EN'}
    </span>
    </button>
  );
} 