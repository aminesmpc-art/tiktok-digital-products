import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "");
  if (!email.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    // In production you would call ConvertKit here. Omitted for offline safety.
  }
  return NextResponse.redirect("/success");
}
