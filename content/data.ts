export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceCents: number;
  currency: string;
  coverImage: string;
  tags: string[];
  includes: string[];
  faq: { q: string; a: string }[];
  stripePriceId?: string;
  filePath: string;
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  duration: string;
  priceCents: number;
  bookingUrl: string;
  deliverables: string[];
  stripePriceId?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  resultMetric?: string;
};

export type LeadMagnet = {
  id: string;
  title: string;
  description: string;
  filePath: string;
  formCopy: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
};

export const site = {
  brand: process.env.NEXT_PUBLIC_BRAND_NAME || "TikTok Strategy Studio",
  tagline: "Growth systems for creators, founders, and lean teams.",
  cta: {
    primary: "/products",
    secondary: "/freebie"
  },
  social: {
    tiktok: "#",
    twitter: "#",
    instagram: "#"
  }
};

export const products: Product[] = [
  {
    id: "prod-templates",
    slug: "viral-hook-templates",
    name: "Viral Hook Templates",
    shortDescription: "50 proven TikTok hooks and 30-second script starters.",
    description:
      "A swipe file of scroll-stopping hooks, 3-part storytelling beats, and CTA prompts you can plug into any niche.",
    priceCents: 3900,
    currency: "USD",
    coverImage: "/images/hooks.jpg",
    tags: ["templates", "hooks", "scripts"],
    includes: ["50 hooks across 5 niches", "Script beats for 15s/30s", "CTA bank", "Publishing checklist"],
    faq: [
      { q: "Is this for beginners?", a: "Yes, each hook includes a short example to copy and tweak." },
      { q: "Can agencies use this?", a: "You can use within your client work; just don't resell the file as-is." }
    ],
    stripePriceId: process.env.STRIPE_PRICE_HOOKS,
    filePath: "/downloads/hooks.pdf"
  },
  {
    id: "prod-audit",
    slug: "tiktok-audit-playbook",
    name: "TikTok Audit Playbook",
    shortDescription: "Fix what's blocking growth in 60 minutes.",
    description: "A guided audit with scorecards, metrics to track, and plug-and-play experiments.",
    priceCents: 6900,
    currency: "USD",
    coverImage: "/images/audit.jpg",
    tags: ["audit", "playbook"],
    includes: ["Account teardown checklist", "Metric tracker", "Experiment roadmap"],
    faq: [
      { q: "Does this include examples?", a: "Yes—screenshots, prompts, and before/after breakdowns." }
    ],
    stripePriceId: process.env.STRIPE_PRICE_AUDIT,
    filePath: "/downloads/audit.pdf"
  }
];

export const services: Service[] = [
  {
    id: "svc-strategy-call",
    slug: "strategy-call",
    name: "TikTok Strategy Call",
    description: "A 45-minute live teardown and roadmap with a creator-focused strategist.",
    duration: "45 minutes",
    priceCents: 19900,
    bookingUrl: "https://cal.com/placeholder",
    deliverables: ["Audience + offer alignment", "Content pillars + hooks", "30-day testing plan"],
    stripePriceId: process.env.STRIPE_PRICE_CALL
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Alex Kim",
    role: "Creator, 250k followers",
    avatar: "/images/avatar1.png",
    quote: "Grew from 20k to 100k in 45 days using the hook bank.",
    resultMetric: "+5x views"
  },
  {
    name: "Morgan Lee",
    role: "Ecom founder",
    avatar: "/images/avatar2.png",
    quote: "The audit playbook paid for itself in one launch weekend.",
    resultMetric: "+38% conversion"
  }
];

export const leadMagnets: LeadMagnet[] = [
  {
    id: "lead-fast-start",
    title: "7 TikTok Prompts That Always Get Saves",
    description: "Copy-and-paste prompts plus a posting cadence to test this week.",
    filePath: "/downloads/prompts.pdf",
    formCopy: "Drop your best email and we'll send the prompts + a weekly breakdown."
  }
];

export const faq = [
  { q: "Who is this for?", a: "Creators, founders, and marketers who want predictable TikTok output." },
  { q: "Do I need to be on camera?", a: "No—scripts include b-roll and UGC formats." },
  { q: "Do you offer refunds?", a: "Digital products are non-refundable, but we want you to win—email us and we'll help." }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "tiktok-content-engine",
    title: "Build a TikTok Content Engine in 60 Minutes",
    excerpt: "A rapid planning sprint to map 12 posts for the next month.",
    date: "2024-06-01",
    body: `## The 3-bucket system\n- Educate: quick wins and misconceptions\n- Demonstrate: screen shares, live edits\n- Convert: offers, lead magnets, invites\n\n### Checklist\n1. Choose 3 pillars\n2. Write 5 hooks each\n3. Batch record for 45 minutes`
  },
  {
    slug: "tiktok-seo",
    title: "TikTok SEO in 5 Minutes",
    excerpt: "Rank for intent without feeling spammy.",
    date: "2024-05-15",
    body: `### Quick wins\n- Use 1-2 keywords in the first 80 characters\n- Add on-screen text that mirrors your hook\n- Pin a comment with the CTA\n- Repurpose to Reels + Shorts with minor edits`
  }
];
