"use client";

import Link from "next/link";
import type { Route } from "next";
import { useState } from "react";
import { site } from "@/content/data";

const links: { href: Route; label: string }[] = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/freebie", label: "Freebie" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight" aria-label="Go home">
          {site.brand}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand.accent">
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="rounded-full bg-brand.accent px-4 py-2 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px]"
          >
            Shop templates
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/products"
            className="rounded-full bg-brand.accent px-4 py-2 text-sm font-semibold text-white shadow"
          >
            Shop
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition hover:border-slate-300"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              ></span>
              <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "opacity-0" : ""}`}></span>
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white shadow-inner md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-base">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-semibold hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="rounded-lg px-3 py-3 font-semibold text-brand.accent hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
