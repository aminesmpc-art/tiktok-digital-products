import { NextResponse } from "next/server";
import { createCheckoutSession } from "../../../lib/checkout";

export async function POST(request: Request) {
  const form = await request.formData();
  const priceId = String(form.get("priceId") || "");
  const productSlug = form.get("productSlug")?.toString();
  if (!priceId) return NextResponse.json({ error: "Missing price" }, { status: 400 });
  try {
    const session = await createCheckoutSession({ priceId, productSlug });
    return NextResponse.redirect(session.url || "/success");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
