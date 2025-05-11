export const i18n = {
  defaultLocale: 'vi' as const,
  locales: ['en', 'vi'] as const,
} as const;

export type Locale = (typeof i18n)['locales'][number]; 