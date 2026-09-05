# Khuzemah Saeed — Portfolio

A single-page Next.js (App Router) portfolio built from your resume. Visual
concept: you as an integration hub — the hero diagram maps the real
platforms you've connected (Property Finder, Bitrix24, Stripe, Cin7,
HubSpot, WordPress, an AI chatbot) around a central node, echoing the
"third-party integrations" thread that runs through your actual work.

No UI framework/CSS library is used — just plain CSS with a small design
token system (colors, type, spacing) in `app/globals.css`, so there's
nothing extra to configure.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

**Option A — from the Vercel dashboard (no CLI):**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new, import that repository.
3. Leave all settings as default (Vercel auto-detects Next.js) and click Deploy.

**Option B — from your terminal:**
```bash
npm install -g vercel
vercel
```
Follow the prompts; Vercel will give you a live URL when it finishes.

## Editing content

Everything text-based lives in `app/page.js` as plain arrays near the top
of the file:
- `SKILLS` — the capability grid
- `INTEGRATIONS` — the platform list under "Platforms integrated"
- `EXPERIENCE` — your roles, each with sub-projects and bullet points
- The `NODES` array and hero copy (headline/tagline) are also in this file

Colors, fonts, and spacing are all defined as CSS variables at the top of
`app/globals.css` under `:root` — change a value there and it updates
everywhere it's used.

## Before you publish

A couple of things worth double-checking against your own records:
- The phone number and email in the hero, footer, and header are taken
  directly from your resume — confirm they're still current.
- Add a real project screenshot or two if you can share non-confidential
  ones — right now the site relies on the diagram and written detail
  rather than screenshots, since none were provided.
