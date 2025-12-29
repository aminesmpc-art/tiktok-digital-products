import { services } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const service = services[0];
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase text-brand.accent">1:1 support</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">TikTok Strategy Call / Audit</h1>
        <p className="text-base leading-relaxed text-slate-700">Ship a revenue-ready TikTok plan in one focused session.</p>
      </div>
      <div className="space-y-4 rounded-3xl border bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">{service.name}</h2>
        <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {service.duration}
          </span>
          <span className="text-2xl font-bold text-slate-900">{formatPrice(service.priceCents)}</span>
        </div>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand.accent">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={service.bookingUrl} className="w-full justify-center sm:w-auto">
            Book the call
          </Button>
          <form action="/api/checkout" method="post" className="w-full sm:w-auto">
            <input type="hidden" name="priceId" value={service.stripePriceId || service.id} />
            <input type="hidden" name="productSlug" value={service.slug} />
            <Button type="submit" variant="secondary" className="w-full justify-center">
              Pay deposit
            </Button>
          </form>
        </div>
      </div>
      <StickyCTA label="Book the strategy call" href={service.bookingUrl} subtext={formatPrice(service.priceCents)} tone="book" />
    </div>
  );
}
