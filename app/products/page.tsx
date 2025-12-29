import { products } from "@/content/data";
import { formatPrice } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

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
          <article
            key={product.id}
            className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase text-brand.accent">
              <span>Digital</span>
              <span className="rounded-full bg-slate-900 px-2 py-1 text-[11px] text-white">{formatPrice(product.priceCents)}</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
            <p className="text-sm leading-relaxed text-slate-700">{product.shortDescription}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand.soft px-3 py-1 text-brand.accent">
                  {tag}
                </span>
              ))}
            </div>
            <Button href={`/products/${product.slug}`} variant="secondary" className="w-full justify-center text-sm">
              Shop this kit
            </Button>
          </article>
        ))}
      </div>
      <StickyCTA label="Shop best-sellers" href="/products" subtext="Built for TikTok growth" />
    </div>
  );
}
