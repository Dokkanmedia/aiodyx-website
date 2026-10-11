# AIODYX website

Next.js 15 (App Router), Arabic (RTL) + English, no UI framework — plain CSS in `app/globals.css`.

```bash
npm install
npm run dev      # http://localhost:3010 → redirects to /ar
npm run build && npm run start
```

## GitHub Pages preview

`npm run build:pages` builds a static copy into `out/` for https://dokkanmedia.github.io/aiodyx-website/
(served from `/aiodyx-website`, hidden from search engines). There is no server there, so the contact
form opens WhatsApp instead of creating an Odoo lead. Publish by pushing `out/` to the `gh-pages` branch.

## Where things live

| What | File |
|---|---|
| Apps (10), their copy, features, KPIs, mock tables | `lib/content.ts` → `apps` |
| Platforms (ZATCA, JoFotara, Qiwa, Mudad, GOSI, SSC, banks…) | `lib/content.ts` → `platforms` |
| Savings calculator prices & assumptions | `lib/content.ts` → `tools`, `savingsAssumptions` |
| Phone numbers / hours | `lib/content.ts` → `contact` |
| Shared UI strings | `lib/i18n.ts` |
| Pages | `app/[locale]/…` (home, apps, apps/[slug], integrations, savings, contact) |

Adding an app or platform = adding an entry in `lib/content.ts`; pages are generated from it.

## Environment

- `SITE_URL` — public URL used for canonical/hreflang tags (default `https://aiodyx.com`).
- `CONTACT_WEBHOOK_URL` — where consultation requests are POSTed as JSON (Odoo CRM endpoint, Make/Zapier, Slack…). Without it, requests are only logged on the server.

## Before going live

- Replace the illustrative numbers: per-app KPIs (`kpi`), calculator prices (`tools`), `savingsAssumptions`.
- Confirm every platform listed in `platforms` is one AIODYX actually delivers.
- Review the "Odoo alone vs Odoo with AIODYX" table in `app/[locale]/integrations/page.tsx`.

## Screenshots & photos

- `public/odoo/*.jpg` — real Odoo 19 screens from a local demo database (`aiodyx_demo`, fictional Saudi company, Arabic UI). Re-shoot after changing demo data.
- `public/stock/*.jpg` — temporary Unsplash photos (see `public/stock/CREDITS.md`). Replace with your own photos using the same file names.
