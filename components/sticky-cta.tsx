"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
    <div
      className="pointer-events-none fixed left-0 right-0 z-40 md:hidden"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="pointer-events-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
          <Link
            href={href as any}
            className={cn(
              "flex items-center justify-between gap-4 px-5 py-4 text-base font-semibold transition active:scale-[0.99]",
              toneClass
            )}
            aria-label={label}
          >
            <div className="flex flex-col text-left">
              <span>{label}</span>
              {subtext ? <span className="text-xs opacity-85">{subtext}</span> : null}
            </div>
            <span aria-hidden className="text-xl">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
