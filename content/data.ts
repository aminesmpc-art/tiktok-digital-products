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
  filePath?: string;
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
  summary: string;
  body: string;
  published: string;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "tiktok-scripts-swipefile",
    name: "TikTok Hooks & Scripts Swipe File",
    shortDescription: "64 plug-and-play hooks that stop the scroll and drive sales.",
    description: "A curated swipe file of winning hooks, scripts, and CTAs tested across dozens of accounts.",
    priceCents: 4900,
    currency: "USD",
    coverImage: "/images/hooks.jpg",
    tags: ["hooks", "scripts", "conversion"],
    includes: ["64 tested hooks", "10 CTA formulas", "Posting cadence template"],
    faq: [
      { q: "Is this for beginners?", a: "Yes, the scripts are annotated and easy to customize." },
      { q: "Do I need a niche?", a: "You can adapt the hooks to any topic or offer." }
    ],
    stripePriceId: "price_tiktok_hooks",
    filePath: "/downloads/hooks.pdf"
  },
  {
    id: "p2",
    slug: "ugc-studio-kit",
    name: "UGC Studio Kit",
    shortDescription: "A repeatable system to produce 10 videos in one afternoon.",
    description: "Frameworks, shot lists, and editing checklists for UGC-style TikToks that look native and convert.",
    priceCents: 6900,
    currency: "USD",
    coverImage: "/images/ugc.jpg",
    tags: ["ugc", "production"],
    includes: ["Batching schedule", "Shot list", "CapCut presets"],
    faq: [{ q: "Can I use this for clients?", a: "Yes—license includes client work." }],
    stripePriceId: "price_ugc_kit",
    filePath: "/downloads/ugc.pdf"
  }
];

export const services: Service[] = [
  {
    id: "s1",
    slug: "strategy-audit",
    name: "TikTok Strategy Call + Audit",
    description: "A 60-minute teardown of your account, offer, and content plan with a 7-day action map.",
    duration: "60 minutes",
    priceCents: 19000,
    bookingUrl: "https://cal.com/placeholder",
    deliverables: ["Live audit", "7-day sprint plan", "DM support for 7 days"]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Jordan C.",
    role: "Founder, DTC skincare",
    avatar: "/avatars/jordan.png",
    quote: "We went from guessing to publishing with confidence. Revenue from TikTok tripled in 45 days.",
    resultMetric: "3x revenue"
  },
  {
    name: "Amira L.",
    role: "Creator, 120k followers",
    avatar: "/avatars/amira.png",
    quote: "The swipe file paid for itself in a weekend. Hooks finally match my offers."
  }
];

export const leadMagnet: LeadMagnet = {
  id: "lm1",
  title: "TikTok 7-Day Launch Plan",
  description: "A tactical checklist to post, measure, and monetize your first week of TikToks.",
  filePath: "/downloads/launch-plan.pdf",
  formCopy: "Drop your email to get the plan + weekly breakdowns."
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tiktok-offer-clarity",
    title: "Convert more views by clarifying your offer",
    summary: "How to translate your offer into scroll-stopping hooks and CTAs.",
    body: "<p>Lead with the problem, then stack proof. Use a fast CTA that promises a micro-win.</p>",
    published: "2024-06-01"
  },
  {
    slug: "posting-cadence",
    title: "A calm posting cadence for busy founders",
    summary: "Repurpose, script, and batch in under 2 hours a week.",
    body: "<p>Pick one pillar per day, reuse hooks, and ship fast videos with captions.</p>",
    published: "2024-05-15"
  }
];
