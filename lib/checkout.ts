import Stripe from "stripe";
import { products, services } from "@/content/data";

export type CheckoutInput = { priceId: string; productSlug?: string };

export const findItem = (priceId: string, productSlug?: string) => {
  const product = products.find((p) => p.stripePriceId === priceId || p.id === priceId || p.slug === productSlug);
  const service = services.find((s) => s.stripePriceId === priceId || s.id === priceId || s.slug === productSlug);
  return product || service;
};

export async function createCheckoutSession(input: CheckoutInput) {
  const item = findItem(input.priceId, input.productSlug);
  if (!item) throw new Error("Unknown item");

  if (!process.env.STRIPE_SECRET_KEY) {
    return { url: `/success?demo=${item.slug}` };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: input.priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/cancel`
  });
  return session;
}
