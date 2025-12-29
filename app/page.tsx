import Link from "next/link";
import { products, services, testimonials, leadMagnets, faq, site } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

const trustRow = ["Creators + founders", "Results in 30 days", "Templates included"];

export default function HomePage() {
  const featured = products[0];
  const magnet = leadMagnets[0];
  return (
    <div className="space-y-12">
      <section className="grid items-start gap-6 rounded-3xl border bg-white/80 p-5 shadow-sm sm:p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand.accent">TikTok revenue systems</p>
          <h1 className="text-[1.85rem] font-bold leading-tight text-slate-900 sm:text-4xl">
            Stop guessing. Ship TikTok content that converts in weeks, not months.
          </h1>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{site.tagline}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button className="w-full justify-center sm:w-auto" href="/products">
              Shop TikTok kits
            </Button>
            <Button variant="secondary" className="w-full justify-center sm:w-auto" href="/services">
              Book a strategy call
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm sm:w-auto" href="/freebie">
              Grab the free prompt pack →
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-700 sm:text-xs">
            {trustRow.map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-slate-800 ring-1 ring-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 shadow-inner sm:p-6">
          <div className="flex items-center justify-between text-[13px] font-semibold text-slate-600">
            <span>Featured product</span>
            <span className="rounded-full bg-brand.soft px-3 py-1 text-xs text-brand.accent">Launch-ready</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{featured.name}</h2>
          <p className="text-sm leading-relaxed text-slate-700">{featured.shortDescription}</p>
          <p className="text-2xl font-bold text-slate-900">{formatPrice(featured.priceCents)}</p>
          <ul className="space-y-2 rounded-xl bg-white p-4 text-sm text-slate-700 ring-1 ring-slate-100">
            {featured.includes.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand.accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 text-sm">
            <Button href={`/products/${featured.slug}`} className="flex-1 justify-center sm:flex-none">
              Shop this kit
            </Button>
            <Button variant="secondary" href="/freebie" className="flex-1 justify-center sm:flex-none">
              Try a free sample
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-brand.accent">Services & Freebie</p>
            <h2 className="text-2xl font-bold text-slate-900">Get hands-on guidance</h2>
          </div>
          <Button variant="ghost" className="justify-start text-sm" href="/services">
            Book a strategy call →
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase text-brand.accent">
                <span>Service</span>
                <span className="rounded-full bg-brand.soft px-3 py-1 text-[11px] text-brand.accent">Live</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{svc.name}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{svc.description}</p>
              <p className="text-xl font-bold text-slate-900">{formatPrice(svc.priceCents)}</p>
              <Button href="/services" className="w-full justify-center text-sm">
                Book this call
              </Button>
            </div>
          ))}
          <div className="flex flex-col gap-3 rounded-2xl border border-brand.accent/30 bg-brand.soft p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase text-brand.accent">Freebie</div>
            <h3 className="text-lg font-semibold text-slate-900">{magnet.title}</h3>
            <p className="text-sm leading-relaxed text-slate-700">{magnet.description}</p>
            <Button variant="secondary" href="/freebie" className="w-full justify-center text-sm">
              Get the prompts
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-brand.accent">Digital products</p>
            <h2 className="text-2xl font-bold text-slate-900">Launch faster with proven templates</h2>
          </div>
          <Button variant="ghost" className="justify-start text-sm" href="/products">
            See all products →
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase text-brand.accent">
                <span>Digital</span>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[11px] text-white">{formatPrice(product.priceCents)}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent">
                    {tag}
                  </span>
                ))}
              </div>
              <Button href={`/products/${product.slug}`} variant="secondary" className="w-full justify-center text-sm">
                Shop this kit
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-bold text-slate-900">What clients say</h3>
          <p className="text-sm text-slate-600">Proof the system works for creators and small teams.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="flex flex-col gap-2 rounded-2xl border bg-slate-50 p-5 shadow-inner">
              {t.resultMetric ? (
                <span className="w-fit rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand.accent ring-1 ring-brand.accent/30">
                  {t.resultMetric}
                </span>
              ) : null}
              <p className="text-base font-semibold leading-snug text-slate-900">“{t.quote}”</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {t.name} · {t.role}
              </p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-brand.accent/30 bg-brand.soft p-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-900">How it works</h3>
          <ol className="space-y-3 text-sm leading-relaxed text-slate-700">
            <li>1) Choose the kit or book the call that fits your stage.</li>
            <li>2) Implement the prompts, scripts, and tests for 2 weeks.</li>
            <li>3) Review the results live; we tune the system and scale.</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-slate-900">Top questions</h4>
          <div className="divide-y rounded-xl border bg-white">
            {faq.slice(0, 3).map((item) => (
              <details key={item.q} className="group px-4 py-3 text-sm">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  {item.q}
                  <span aria-hidden className="text-lg text-brand.accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="pt-2 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <StickyCTA label="Shop TikTok kits" href="/products" subtext="Templates and scripts built for TikTok" />
    </div>
  );
}
