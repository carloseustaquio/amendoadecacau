// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amendoa-dcacau.vercel.app',
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4327,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
