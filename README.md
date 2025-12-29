# TikTok Strategy Studio

A lightweight Next.js + Tailwind landing experience to sell TikTok strategy products and services.

## Architecture
- **content/**: Editable seed data (products, services, testimonials, lead magnets, blog posts).
- **app/**: App Router pages, API routes for checkout, contact, newsletter, success/cancel states, and SEO files.
- **lib/**: Utilities for pricing, markdown rendering, and checkout session creation.
- **styles**: Tailwind via `app/globals.css`.

## Environment
Copy `.env.example` to `.env.local` and fill as needed. Stripe keys are optional; without them, checkout redirects to a demo success page.

## Commands
- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`

### Path aliases
- Use `@/content/*` for seed data (products, services, blog posts) instead of relative `../../content/*` paths.
- Use `@/lib/*` for utilities like `markdownToHtml`, `formatPrice`, and checkout helpers.

## Testing
Vitest covers formatting, slug lookup, and checkout creation (with mocked Stripe). Ensure no network calls are required.

## Extending
- Add or edit products in `content/data.ts`.
- Update copy per page components in `app/`.
- Replace placeholder images in `public/images/`.
- Wire real email and checkout providers by supplying env vars.
