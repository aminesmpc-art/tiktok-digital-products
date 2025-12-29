import { products, services, type Product, type Service } from "../content/data";

export const formatPrice = (priceCents: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(priceCents / 100);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const markdownToHtml = (body: string) => {
  return body
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith("## ")) return `<h2 class="text-xl font-semibold mb-2">${block.slice(3)}</h2>`;
      if (block.startsWith("### ")) return `<h3 class="text-lg font-semibold mb-2">${block.slice(4)}</h3>`;
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .map((line) => line.replace(/^\- /, ""))
          .map((item) => `<li class="ml-5 list-disc">${item}</li>`)
          .join("\n");
        return `<ul class="space-y-1 mb-3">${items}</ul>`;
      }
      return `<p class="mb-3 leading-relaxed">${block}</p>`;
    })
    .join("\n");
};
