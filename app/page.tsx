import { products, services, testimonials, leadMagnets, faq, site } from "@/content/data";
import { formatPrice } from "@/lib/utils";

const heroBullets = ["Hook-first creative", "Launch-ready templates", "Audit-grade clarity"];

export default function HomePage() {
  const featured = products[0];
  const magnet = leadMagnets[0];
  return (
    <div className="space-y-14">
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-brand.accent">TikTok revenue systems</p>
          <h1 className="text-4xl font-bold leading-tight">Stop guessing. Ship TikTok content that converts.</h1>
          <p className="text-lg text-slate-700">{site.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-brand.accent px-5 py-3 text-white font-semibold" href="/products">
              Shop digital kits
            </a>
            <a className="rounded-full border border-brand.accent px-5 py-3 font-semibold" href="/services">
              Book a strategy call
            </a>
            <a className="text-sm underline" href="/freebie">
              Get the free prompt pack →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            {heroBullets.map((b) => (
              <span key={b} className="rounded-full bg-white px-3 py-1 shadow">
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 space-y-4 border">
          <p className="text-sm font-semibold">Featured product</p>
          <h2 className="text-2xl font-bold">{featured.name}</h2>
          <p className="text-slate-700">{featured.shortDescription}</p>
          <p className="text-lg font-semibold">{formatPrice(featured.priceCents)}</p>
          <a href={`/products/${featured.slug}`} className="text-brand.accent font-semibold underline">
            View details →
          </a>
          <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1">
            {featured.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {services.map((svc) => (
          <div key={svc.id} className="rounded-xl bg-white p-5 shadow border flex flex-col gap-3">
            <div className="text-xs font-semibold text-brand.accent">Service</div>
            <h3 className="text-xl font-semibold">{svc.name}</h3>
            <p className="text-sm text-slate-700">{svc.description}</p>
            <p className="text-lg font-semibold">{formatPrice(svc.priceCents)}</p>
            <a className="rounded-md bg-brand.accent px-4 py-2 text-white text-sm font-semibold text-center" href="/services">
              Book this
            </a>
          </div>
        ))}
        <div className="rounded-xl bg-brand.soft p-5 shadow border border-brand.accent/20 flex flex-col gap-3">
          <div className="text-xs font-semibold text-brand.accent">Freebie</div>
          <h3 className="text-xl font-semibold">{magnet.title}</h3>
          <p className="text-sm text-slate-700">{magnet.description}</p>
          <a className="rounded-md bg-white px-4 py-2 text-brand.accent text-sm font-semibold text-center" href="/freebie">
            Get the prompts
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-xl bg-white p-5 shadow border space-y-3">
            <div className="text-xs font-semibold text-brand.accent">Digital</div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-slate-700">{product.shortDescription}</p>
            <p className="text-lg font-semibold">{formatPrice(product.priceCents)}</p>
            <a className="text-brand.accent font-semibold underline text-sm" href={`/products/${product.slug}`}>
              View details
            </a>
          </div>
        ))}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow border space-y-4">
        <h3 className="text-2xl font-bold">What clients say</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border p-4 bg-slate-50">
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-slate-600">{t.role}</p>
              <p className="mt-2">“{t.quote}”</p>
              {t.resultMetric && <p className="text-xs font-semibold text-brand.accent">{t.resultMetric}</p>}
            </blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand.soft p-6 border border-brand.accent/30 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold">How it works</h3>
          <ol className="space-y-3 mt-3 text-sm text-slate-700">
            <li>1) Choose the kit or book the call that fits your stage.</li>
            <li>2) Implement the prompts, scripts, and tests for 2 weeks.</li>
            <li>3) Review the results live; we tune the system and scale.</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Top questions</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {faq.slice(0, 3).map((item) => (
              <li key={item.q} className="rounded-md bg-white p-3 shadow-sm">
                <p className="font-semibold">{item.q}</p>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
