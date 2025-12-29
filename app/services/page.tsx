import { services } from "../../content/data";
import { formatPrice } from "../../lib/utils";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const service = services[0];
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-brand.accent">1:1 support</p>
        <h1 className="text-3xl font-bold">TikTok Strategy Call / Audit</h1>
        <p className="text-slate-700">Ship a revenue-ready TikTok plan in one focused session.</p>
      </div>
      <div className="rounded-xl bg-white border p-6 shadow space-y-3">
        <h2 className="text-2xl font-semibold">{service.name}</h2>
        <p>{service.description}</p>
        <p className="text-lg font-semibold">{formatPrice(service.priceCents)}</p>
        <p className="text-sm text-slate-600">Duration: {service.duration}</p>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex gap-3 flex-wrap">
          <a className="rounded-full bg-brand.accent px-5 py-3 text-white font-semibold" href={service.bookingUrl}>
            Book the call
          </a>
          <form action="/api/checkout" method="post">
            <input type="hidden" name="priceId" value={service.stripePriceId || service.id} />
            <input type="hidden" name="productSlug" value={service.slug} />
            <button className="rounded-full border border-brand.accent px-5 py-3 font-semibold" type="submit">
              Pay deposit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
