"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm({ compact }: { compact?: boolean }) {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    setStatus("loading");
    const res = await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
    if (res.ok) setStatus("success");
    else setStatus("error");
  };

  return (
    <form className={`flex ${compact ? "flex-col gap-2" : "flex-col md:flex-row gap-3"}`} onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded border px-3 py-2 text-sm focus:outline-brand-accent"
      />
      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Get updates"}
      </button>
      {status === "success" && <p className="text-sm text-green-700">Check your inbox for the goodies.</p>}
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
    </form>
  );
}
