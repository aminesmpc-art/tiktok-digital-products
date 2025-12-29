import { NextResponse } from "next/server";
import { sendContactMessage } from "../../../lib/email";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }
  await sendContactMessage({ name, email, message });
  return NextResponse.json({ ok: true });
}
