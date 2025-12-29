import { products } from "../content/data";

export const formatPrice = (priceCents: number, currency = "USD") => {
  const dollars = priceCents / 100;
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(dollars);
};

export const findProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
