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

All copy lives in `data/portfolioData.js`:

- `PROFILE` — name, headline, contact details, availability and the recruiter
  "hiring snapshot". Optional fields (`noticePeriod`, `employmentType`,
  `relocation`, `languages`, `photo`, `certifications`, `testimonials`) stay
  hidden on the site until you fill them in.
- `IMPACT`, `DOMAINS`, `FAQ` — homepage numbers, industries and recruiter Q&A.
- `PROJECT_CARDS` / `HOMEPAGE_PROJECTS` — short card copy and which case
  studies appear on the homepage (and in what order).
- `FEATURED_PROJECTS`, `EXPERIENCE`, `SKILLS`, `CORE_SKILLS` — full case
  studies, work history and the skills matrix.

Styling is plain CSS with design tokens at the top of `app/globals.css`
(light theme by default, dark theme via `prefers-color-scheme`).
