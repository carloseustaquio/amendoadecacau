import { getEntry, render } from 'astro:content';
import type { Locale, PageKey } from './i18n';
import ptUi from '../content/pt/ui.json';
import enUi from '../content/en/ui.json';
import frUi from '../content/fr/ui.json';
import ptHome from '../content/pt/home.json';
import enHome from '../content/en/home.json';
import frHome from '../content/fr/home.json';
import ptStory from '../content/pt/story.json';
import enStory from '../content/en/story.json';
import frStory from '../content/fr/story.json';
import ptFarm from '../content/pt/farm.json';
import enFarm from '../content/en/farm.json';
import frFarm from '../content/fr/farm.json';
import ptProducts from '../content/pt/products.json';
import enProducts from '../content/en/products.json';
import frProducts from '../content/fr/products.json';
import ptContact from '../content/pt/contact.json';
import enContact from '../content/en/contact.json';
import frContact from '../content/fr/contact.json';

export type UiCopy = typeof ptUi;
export type HomeCopy = typeof ptHome;
export type StoryCopy = typeof ptStory;
export type FarmCopy = typeof ptFarm;
export type ProductsCopy = typeof ptProducts;
export type ContactCopy = typeof ptContact;
export type ProductItem = ProductsCopy['items'][number];

const ui = { pt: ptUi, en: enUi, fr: frUi };
const home = { pt: ptHome, en: enHome, fr: frHome };
const story = { pt: ptStory, en: enStory, fr: frStory };
const farm = { pt: ptFarm, en: enFarm, fr: frFarm };
const products = { pt: ptProducts, en: enProducts, fr: frProducts };
const contact = { pt: ptContact, en: enContact, fr: frContact };

export function getUi(locale: Locale): UiCopy {
  return ui[locale];
}
export function getHome(locale: Locale): HomeCopy {
  return home[locale];
}
export function getStory(locale: Locale): StoryCopy {
  return story[locale];
}
export function getFarm(locale: Locale): FarmCopy {
  return farm[locale];
}
export function getProducts(locale: Locale): ProductsCopy {
  return products[locale];
}
export function getContact(locale: Locale): ContactCopy {
  return contact[locale];
}

export async function getPageMarkdown(locale: Locale, slug: PageKey) {
  const id = `${locale}/${slug}`;
  const entry = await getEntry('pages', id);
  if (!entry) {
    throw new Error(`Missing markdown page: ${id}`);
  }
  const rendered = await render(entry);
  return {
    title: entry.data.title,
    description: entry.data.description,
    Content: rendered.Content,
  };
}
