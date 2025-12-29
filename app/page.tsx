import Link from "next/link";
import { products, services, testimonials, leadMagnets, faq, site } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";

const heroBullets = ["Hook-first creative", "Launch-ready templates", "Audit-grade clarity"];

export default function HomePage() {
  const featured = products[0];
  const magnet = leadMagnets[0];
  return (
    <div className="space-y-14">
      <section className="grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand.accent">TikTok revenue systems</p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Stop guessing. Ship TikTok content that converts.
          </h1>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{site.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-brand.accent px-5 py-3 text-base font-semibold text-white shadow transition hover:translate-y-[-1px]"
              href="/products"
            >
              Shop digital kits
            </Link>
            <Link
              className="rounded-full border border-brand.accent px-5 py-3 text-base font-semibold text-slate-900 transition hover:bg-brand.soft"
              href="/services"
            >
              Book a strategy call
            </Link>
            <Link className="text-sm font-semibold underline" href="/freebie">
              Get the free prompt pack →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
            {heroBullets.map((b) => (
              <span key={b} className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
                {b}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">
            <div className="h-10 w-10 rounded-full bg-brand.soft" aria-hidden />
            <div className="text-sm leading-relaxed text-slate-700">
              <p className="font-semibold text-slate-900">Used by creators and brands</p>
              <p>Templates, hooks, and tests to see results in 30 days.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
            <span>Featured product</span>
            <span className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent">Launch-ready</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{featured.name}</h2>
          <p className="text-base text-slate-700">{featured.shortDescription}</p>
          <p className="text-2xl font-bold text-slate-900">{formatPrice(featured.priceCents)}</p>
          <ul className="space-y-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            {featured.includes.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand.accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={`/products/${featured.slug}`}
              className="rounded-full bg-slate-900 px-4 py-3 font-semibold text-white transition hover:translate-y-[-1px]"
            >
              View details
            </Link>
            <Link
              href="/freebie"
              className="rounded-full border border-slate-200 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
            >
              Try a free sample
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-brand.accent">Services & Freebie</p>
            <h2 className="text-2xl font-bold text-slate-900">Get hands-on guidance</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand.accent underline">
            Book a strategy call
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col gap-3 rounded-xl border bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-brand.accent">Service</div>
              <h3 className="text-lg font-semibold text-slate-900">{svc.name}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{svc.description}</p>
              <p className="text-xl font-bold text-slate-900">{formatPrice(svc.priceCents)}</p>
              <Link
                className="rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
                href="/services"
              >
                Book this
              </Link>
            </div>
          ))}
          <div className="flex flex-col gap-3 rounded-xl border border-brand.accent/20 bg-brand.soft p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase text-brand.accent">Freebie</div>
            <h3 className="text-lg font-semibold text-slate-900">{magnet.title}</h3>
            <p className="text-sm leading-relaxed text-slate-700">{magnet.description}</p>
            <Link
              className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-brand.accent ring-1 ring-brand.accent/30"
              href="/freebie"
            >
              Get the prompts
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-brand.accent">Digital products</p>
            <h2 className="text-2xl font-bold text-slate-900">Launch faster with proven templates</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-brand.accent underline">
            See all products
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-3 rounded-xl border bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-brand.accent">Digital</div>
              <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{product.shortDescription}</p>
              <p className="text-xl font-bold text-slate-900">{formatPrice(product.priceCents)}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href={`/products/${product.slug}`}
              >
                View details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-bold text-slate-900">What clients say</h3>
          <p className="text-sm text-slate-600">Proof the system works for creators and small teams.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border bg-slate-50 p-4 shadow-inner">
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-600">{t.role}</p>
              <p className="mt-2 leading-relaxed">“{t.quote}”</p>
              {t.resultMetric && (
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand.accent">{t.resultMetric}</p>
              )}
            </blockquote>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-brand.accent/30 bg-brand.soft p-6 md:grid-cols-2">
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
