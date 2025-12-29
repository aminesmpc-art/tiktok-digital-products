import Link from "next/link";
import { services, testimonials } from "../../content/data";
import { formatPrice } from "../../lib/utils";

export default function ServicePage() {
  const service = services[0];
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-brand-accent">Strategy + Audit</p>
        <h1 className="text-3xl font-bold">{service.name}</h1>
        <p className="text-lg text-slate-700">{service.description}</p>
        <p className="text-2xl font-semibold">{formatPrice(service.priceCents)}</p>
        <div className="flex gap-3">
          <Link href={service.bookingUrl} className="btn-primary">
            Book your slot
          </Link>
          <Link href="/products" className="btn-secondary">
            Browse templates
          </Link>
        </div>
      </header>
      <section>
        <h2 className="text-xl font-semibold">What we’ll cover</h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700">
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">What creators say</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border p-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-600">{t.role}</p>
              <p className="mt-2 text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
