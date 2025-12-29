import { NextResponse } from "next/server";
import Stripe from "stripe";
import { findProductBySlug } from "../../../lib/utils";

export async function POST(request: Request) {
  const { slug, successUrl, cancelUrl } = await request.json();
  return handleCheckout(slug, successUrl, cancelUrl);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  return handleCheckout(slug, searchParams.get("successUrl") || undefined, searchParams.get("cancelUrl") || undefined);
}

async function handleCheckout(slug?: string | null, successUrl?: string, cancelUrl?: string) {
  const product = findProductBySlug(slug);
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ url: `${successUrl || "/success"}?demo=true&slug=${slug}` });
  }

  const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: product.stripePriceId,
        quantity: 1,
        price_data: !product.stripePriceId
          ? {
              currency: product.currency,
              unit_amount: product.priceCents,
              product_data: { name: product.name, description: product.shortDescription }
            }
          : undefined
      }
    ],
    success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`
  });

  return NextResponse.json({ url: session.url });
}
