import Link from "next/link";
import { products } from "../../content/data";
import { formatPrice } from "../../lib/utils";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Digital products</h1>
        <p className="text-slate-700">Swipe files, templates, and systems tested across growing accounts.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <span className="text-sm font-semibold text-brand-accent">{formatPrice(product.priceCents)}</span>
            </div>
            <p className="text-slate-700">{product.shortDescription}</p>
            <div className="flex gap-2 flex-wrap text-xs text-brand-accent">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-soft px-3 py-1">#{tag}</span>
              ))}
            </div>
            <Link href={`/products/${product.slug}`} className="btn-primary">
              View product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
