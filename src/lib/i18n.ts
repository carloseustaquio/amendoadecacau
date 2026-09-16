export const locales = ['pt', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const pageKeys = ['home', 'story', 'farm', 'products', 'contact'] as const;
export type PageKey = (typeof pageKeys)[number];

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { pt: '/', en: '/en/', fr: '/fr/' },
  story: { pt: '/quem-somos', en: '/en/our-story', fr: '/fr/notre-histoire' },
  farm: { pt: '/fazenda', en: '/en/the-farm', fr: '/fr/la-ferme' },
  products: { pt: '/produtos', en: '/en/products', fr: '/fr/produits' },
  contact: { pt: '/contato', en: '/en/contact', fr: '/fr/contact' },
};

export const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  fr: 'FR',
};

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
};

export const hreflang: Record<Locale, string> = {
  pt: 'pt',
  en: 'en',
  fr: 'fr',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(page: PageKey, locale: Locale): string {
  return routes[page][locale];
}
