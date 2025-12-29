import { notFound } from "next/navigation";
import { products } from "@/content/data";
import { formatPrice } from "../../../lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <article className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-brand.accent">Digital product</p>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-slate-700">{product.shortDescription}</p>
        <p className="text-2xl font-bold">{formatPrice(product.priceCents)}</p>
        <form action="/api/checkout" method="post" className="flex gap-3 flex-wrap">
          <input type="hidden" name="priceId" value={product.stripePriceId || product.id} />
          <input type="hidden" name="productSlug" value={product.slug} />
          <button className="rounded-full bg-brand.accent px-5 py-3 text-white font-semibold" type="submit">
            Buy now
          </button>
          <a className="rounded-full border border-brand.accent px-5 py-3 font-semibold" href="/freebie">
            Get the free guide
          </a>
        </form>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            {product.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="space-y-2">
            {product.faq.map((item) => (
              <details key={item.q} className="rounded-md border bg-white p-3">
                <summary className="font-semibold">{item.q}</summary>
                <p className="text-sm text-slate-700 mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
