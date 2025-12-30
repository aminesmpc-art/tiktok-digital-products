"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/data";
import { Button } from "@/components/button";

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
  const headerRef = useRef<HTMLElement | null>(null);

  // Keep a CSS variable in sync with the rendered header height so mobile content
  // can offset itself and avoid being overlapped by the sticky header or menu.
  useEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current) return;
      const { height } = headerRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--site-header-height", `${height}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-white/60 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-semibold tracking-tight" aria-label="Go home">
          {site.brand}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand.accent">
              {link.label}
            </Link>
          ))}
          <Button href="/products" className="px-4 py-2 text-sm">
            Shop templates
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Button href="/products" className="px-4 py-2 text-sm shadow-sm">
            Shop
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal>
          <button
            aria-label="Close menu"
            className="absolute inset-0 h-full w-full bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="ml-auto flex h-full w-11/12 max-w-xs flex-col gap-2 bg-white px-5 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">Browse</span>
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-full border border-slate-200 text-lg text-slate-700"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="divide-y text-base">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3 font-semibold hover:text-brand.accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Button href="/services" className="w-full justify-center">
                Book a call
              </Button>
              <Button href="/products" variant="secondary" className="w-full justify-center">
                Shop templates
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
