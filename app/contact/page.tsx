"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setStatus("loading");
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
    setStatus(res.ok ? "success" : "error");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-700">Tell us about your offer and where you’re stuck.</p>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-semibold" htmlFor="name">
            Name
          </label>
          <input className="mt-1 w-full rounded border px-3 py-2" id="name" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input className="mt-1 w-full rounded border px-3 py-2" id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="message">
            What do you need help with?
          </label>
          <textarea className="mt-1 w-full rounded border px-3 py-2" id="message" name="message" required rows={4} />
        </div>
        <button className="btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && <p className="text-sm text-green-700">Thanks! We’ll reply within 1 business day.</p>}
        {status === "error" && <p className="text-sm text-red-600">Unable to send. Try again.</p>}
      </form>
    </div>
  );
}
