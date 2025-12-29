import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import { products, testimonials, services } from "../content/data";
import { formatPrice } from "../lib/utils";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-brand-accent">TikTok Strategy Studio</p>
          <h1 className="text-4xl font-bold leading-tight">Growth systems built for creators and lean teams.</h1>
          <p className="text-lg text-slate-700">
            Plug-and-play scripts, offers, and audits that turn TikTok attention into revenue.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/products" className="btn-primary">
              Shop Digital Products
            </Link>
            <Link href="/lead-magnet" className="btn-secondary">
              Get the free launch plan
            </Link>
          </div>
          <div className="rounded border border-slate-200 p-4 text-sm text-slate-700">
            <p className="font-semibold">How it works</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Pick the system that matches your goal.</li>
              <li>Ship content with proven hooks and CTAs.</li>
              <li>Review results on a strategy call.</li>
            </ol>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-brand-soft p-6 space-y-4">
          <h2 className="text-xl font-semibold">Featured products</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-md bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-slate-600">{product.shortDescription}</p>
                  </div>
                  <p className="text-sm font-semibold">{formatPrice(product.priceCents)}</p>
                </div>
                <div className="mt-3 flex gap-3">
                  <Link href={`/products/${product.slug}`} className="btn-primary">
                    View details
                  </Link>
                  <Link href={`/products/${product.slug}`} className="btn-secondary">
                    Buy now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="rounded-lg border p-6 shadow-sm">
            <p className="text-sm font-semibold text-brand-accent">Signature service</p>
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-slate-700">{service.description}</p>
            <p className="text-lg font-semibold mt-2">{formatPrice(service.priceCents)}</p>
            <Link href={service.bookingUrl} className="btn-primary mt-4 inline-flex">
              Book the call
            </Link>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">Testimonials</h3>
          <div className="mt-4 space-y-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-md border p-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
                <p className="mt-2 text-slate-700">“{t.quote}”</p>
                {t.resultMetric && <p className="mt-1 text-sm font-semibold text-brand-accent">{t.resultMetric}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-brand-accent/30 bg-brand-soft p-6">
          <h3 className="text-xl font-bold">Download the free 7-day launch plan</h3>
          <p className="text-slate-700">We’ll send the checklist and weekly breakdowns straight to your inbox.</p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
