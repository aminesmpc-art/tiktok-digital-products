"use client";

import { useEffect, useState } from "react";

interface StickyCTAProps {
  label: string;
  href: string;
  subtext?: string;
  tone?: "buy" | "book" | "freebie";
}

export function StickyCTA({ label, href, subtext, tone = "buy" }: StickyCTAProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  const toneClass = {
    buy: "bg-brand.accent text-white",
    book: "bg-slate-900 text-white",
    freebie: "bg-emerald-600 text-white"
  }[tone];

  return (
    <div className="pointer-events-none fixed bottom-3 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pointer-events-auto rounded-full shadow-lg">
          <a
            href={href}
            className={`flex items-center justify-between gap-3 rounded-full px-5 py-4 text-base font-semibold transition active:scale-[0.99] ${toneClass}`}
          >
            <div className="flex flex-col">
              <span>{label}</span>
              {subtext ? <span className="text-xs opacity-90">{subtext}</span> : null}
            </div>
            <span aria-hidden className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
