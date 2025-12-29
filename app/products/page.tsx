import Link from "next/link";
import { products } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold leading-tight text-slate-900">Digital products</h1>
        <p className="text-base leading-relaxed text-slate-700">
          Templates, swipe files, and playbooks you can ship this week.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold uppercase text-brand.accent">
              <span>Digital</span>
              <span className="rounded-full bg-brand.soft px-3 py-1 text-[11px] text-brand.accent">Launch ready</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
            <p className="text-sm leading-relaxed text-slate-700">{product.shortDescription}</p>
            <p className="text-xl font-bold text-slate-900">{formatPrice(product.priceCents)}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              href={`/products/${product.slug}`}
            >
              View details
            </Link>
          </article>
        ))}
      </div>
      <StickyCTA label="Shop best-sellers" href="/products" subtext="Built for TikTok growth" />
    </div>
  );
}
