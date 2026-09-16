export const SITE_NAME = "Amêndoa D'Cacau";
export const INSTAGRAM_URL = 'https://www.instagram.com/amendoadecacau/';
export const FACEBOOK_URL = 'https://www.facebook.com/amendoadecacau/';
export const PLACEHOLDER_EMAIL = 'contato@amendoadecacau.com';

export function inquiryEmail(): string {
  return import.meta.env.PUBLIC_INQUIRY_EMAIL || PLACEHOLDER_EMAIL;
}

export function web3formsKey(): string {
  return import.meta.env.PUBLIC_WEB3FORMS_KEY || '';
}

export const licensedCredits = [
  {
    title: 'Cocoa beans in cocoa pod at El Trapiche, Costa Rica',
    author: 'Aude',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Cocoa_beans_in_cocoa_pod_at_El_Trapiche,_Costa_Rica.jpg',
    file: '/images/licensed/cocoa-pod-open-aude.jpg',
  },
  {
    title: 'Theobroma cacao (red pods, Haiti)',
    author: 'Nick Hobgood',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Theobroma_cacao_(red_pods_-_Haiti).jpg',
    file: '/images/licensed/cacao-red-pods-hobgood.jpg',
  },
] as const;
