import { products } from "../../content/data";
import { formatPrice } from "../../lib/utils";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Digital products</h1>
        <p className="text-slate-700">Templates, swipe files, and playbooks you can ship this week.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <article key={product.id} className="rounded-xl bg-white border p-5 shadow space-y-3">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-slate-700">{product.shortDescription}</p>
            <p className="text-lg font-semibold">{formatPrice(product.priceCents)}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <a className="text-brand.accent underline text-sm font-semibold" href={`/products/${product.slug}`}>
              View details
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
