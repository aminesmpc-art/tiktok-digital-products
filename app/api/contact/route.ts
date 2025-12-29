import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");
  if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  // Email adapter placeholder; in production you would send via provider.
  return NextResponse.redirect("/success");
}
