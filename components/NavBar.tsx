"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/service", label: "Strategy Call" },
  { href: "/lead-magnet", label: "Free Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" }
];

export default function NavBar({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-brand-primary">
          {brand}
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-brand-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Book a Call</Link>
        </nav>
        <button
          aria-label="Open navigation"
          className="md:hidden rounded border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 space-y-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
