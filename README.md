# TikTok Strategy Studio

A compact Next.js (App Router) starter for selling TikTok strategy products, booking audits, and capturing leads.

## Getting started
1. Install deps: `npm install`
2. Copy `.env.example` to `.env.local` and fill in values.
3. Run dev server: `npm run dev`
4. Run tests: `npm test`

## Content editing
Update data in `content/data.ts` to adjust products, services, testimonials, and blog posts. Copy is written to be editable without touching components.

## Environment variables
See `.env.example` for Stripe, ConvertKit, and site metadata. Without Stripe keys, checkout returns a demo URL.

## Project structure
- `app/` – App Router pages and API routes
- `components/` – UI primitives (nav, footer, forms)
- `content/` – Editable seed data
- `lib/` – Utilities and adapters
- `tests/` – Vitest unit and integration coverage

## Tests
- `npm test` runs vitest unit + integration coverage (formatting, data lookups, mocked Stripe checkout, and page smoke tests).
