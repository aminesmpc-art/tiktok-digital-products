import { NextResponse } from "next/server";
import { sendNewsletterSignup } from "../../../lib/email";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  await sendNewsletterSignup({ email });
  return NextResponse.json({ ok: true });
}
