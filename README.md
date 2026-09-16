# Amêndoa D'Cacau

Static multilingual marketing site for the family cocoa house **Amêndoa D'Cacau** — Fazenda Eustáquio in southern Bahia (Jussari / Serra do Teimoso, ~1000 m, Mata Atlântica, no agrochemicals) and a European base in Aveiro, Portugal.

This is an inquiry site, not a shop: no CMS, no checkout, no auth, no database.

Live origin we rebuilt from: [amendoadecacau.vercel.app](https://amendoadecacau.vercel.app/).

## Stack

Astro, TypeScript, Tailwind CSS. Portuguese is the default locale at `/`. English is at `/en/`. French is at `/fr/`.

## Pages

| | PT | EN | FR |
| --- | --- | --- | --- |
| Home | `/` | `/en/` | `/fr/` |
| Our story | `/quem-somos` | `/en/our-story` | `/fr/notre-histoire` |
| The farm | `/fazenda` | `/en/the-farm` | `/fr/la-ferme` |
| Products | `/produtos` | `/en/products` | `/fr/produits` |
| Contact | `/contato` | `/en/contact` | `/fr/contact` |

## Run locally

```sh
npm install
npm run dev
```

The dev server binds to `0.0.0.0:4327`.

```sh
npm run build
npm run preview
```

## Edit copy

All visitor-facing copy lives under `src/content/{pt,en,fr}/`:

- `ui.json` — navigation, footer, form labels and states
- `home.json`, `story.json`, `farm.json`, `products.json`, `contact.json` — structured page content
- matching `.md` files — narrative blocks (title, description, body)

Product SKUs and packaging notes are in `products.json`. There are no prices.

## Inquiry form

The contact form posts to [Web3Forms](https://web3forms.com/) when `PUBLIC_WEB3FORMS_KEY` is set. Otherwise it falls back to `mailto:` so the site works without a key.

Copy `.env.example` to `.env` if you need either:

```
PUBLIC_WEB3FORMS_KEY=
PUBLIC_INQUIRY_EMAIL=contato@amendoadecacau.com
```

`contato@amendoadecacau.com` is a placeholder destination until a real inbox is confirmed.

## Images

Family brand, farm and product photographs sit in `public/images/` (downloaded from the existing site). Extra cocoa photographs, credited in the footer:

- [Aude](https://commons.wikimedia.org/wiki/File:Cocoa_beans_in_cocoa_pod_at_El_Trapiche,_Costa_Rica.jpg) — *Cocoa beans in cocoa pod at El Trapiche, Costa Rica*, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- [Nick Hobgood](https://commons.wikimedia.org/wiki/File:Theobroma_cacao_(red_pods_-_Haiti).jpg) — *Theobroma cacao (red pods, Haiti)*, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
