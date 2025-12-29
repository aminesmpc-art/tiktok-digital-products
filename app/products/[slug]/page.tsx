import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../content/data";
import { formatPrice } from "../../../lib/utils";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-slate-700">{product.shortDescription}</p>
        <p className="text-2xl font-semibold">{formatPrice(product.priceCents)}</p>
        <Link
          className="btn-primary inline-flex"
          href={`/api/checkout?slug=${product.slug}&successUrl=/success&cancelUrl=/cancel`}
        >
          Buy now
        </Link>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">What’s inside</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          {product.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <dl className="space-y-3">
          {product.faq.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold">{item.q}</dt>
              <dd className="text-slate-700">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
