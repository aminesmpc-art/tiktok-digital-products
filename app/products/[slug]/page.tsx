import { notFound } from "next/navigation";
import { products } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <article className="space-y-8">
      <div className="space-y-3 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
        <p className="text-[11px] font-semibold uppercase text-brand.accent">Digital product</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{product.name}</h1>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{product.shortDescription}</p>
        <p className="text-2xl font-bold text-slate-900">{formatPrice(product.priceCents)}</p>
        <form id="checkout" action="/api/checkout" method="post" className="flex flex-col gap-3 sm:flex-row">
          <input type="hidden" name="priceId" value={product.stripePriceId || product.id} />
          <input type="hidden" name="productSlug" value={product.slug} />
          <Button type="submit" className="w-full justify-center sm:w-auto">
            Buy now
          </Button>
          <Button variant="secondary" href="/freebie" className="w-full justify-center sm:w-auto">
            Get the free guide
          </Button>
        </form>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="space-y-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">What you get</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
            {product.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand.accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
          <div className="divide-y">
            {product.faq.map((item) => (
              <details key={item.q} className="group px-1 py-3 text-sm">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  {item.q}
                  <span aria-hidden className="text-lg text-brand.accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="pt-2 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <StickyCTA
        label={`Buy ${product.name}`}
        href={`/products/${product.slug}#checkout`}
        subtext={formatPrice(product.priceCents)}
      />
    </article>
  );
}
