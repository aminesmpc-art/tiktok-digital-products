import Link from "next/link";
import { services } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const service = services[0];
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase text-brand.accent">1:1 support</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">TikTok Strategy Call / Audit</h1>
        <p className="text-base leading-relaxed text-slate-700">Ship a revenue-ready TikTok plan in one focused session.</p>
      </div>
      <div className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">{service.name}</h2>
        <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
        <p className="text-2xl font-bold text-slate-900">{formatPrice(service.priceCents)}</p>
        <p className="text-sm text-slate-600">Duration: {service.duration}</p>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand.accent">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-brand.accent px-5 py-3 text-base font-semibold text-white shadow"
            href={service.bookingUrl}
          >
            Book the call
          </a>
          <form action="/api/checkout" method="post">
            <input type="hidden" name="priceId" value={service.stripePriceId || service.id} />
            <input type="hidden" name="productSlug" value={service.slug} />
            <button className="rounded-full border border-brand.accent px-5 py-3 text-base font-semibold text-slate-900 hover:bg-brand.soft" type="submit">
              Pay deposit
            </button>
          </form>
        </div>
      </div>
      <StickyCTA label="Book the strategy call" href={service.bookingUrl} subtext={formatPrice(service.priceCents)} tone="book" />
    </div>
  );
}
