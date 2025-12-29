import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/data";

export const metadata: Metadata = {
  title: `${site.brand} | TikTok growth systems`,
  description: site.tagline,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: site.brand,
    description: site.tagline,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: site.brand,
    locale: "en_US",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: site.brand, description: site.tagline }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-6 space-y-10">
          <header className="flex items-center justify-between gap-4">
            <a href="/" className="text-xl font-semibold tracking-tight">
              {site.brand}
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/products">Products</a>
              <a href="/services">Services</a>
              <a href="/freebie">Freebie</a>
              <a href="/blog">Blog</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact</a>
            </nav>
            <a
              href="/products"
              className="rounded-full bg-brand.accent px-4 py-2 text-sm font-semibold text-white shadow"
            >
              Shop templates
            </a>
          </header>
          <main>{children}</main>
          <footer className="border-t pt-6 text-sm text-slate-600 space-y-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div>
                <p className="font-semibold">{site.brand}</p>
                <p className="text-xs">Strategy, systems, and creative that drives TikTok revenue.</p>
              </div>
              <div className="flex gap-3">
                <a href={site.social.tiktok}>TikTok</a>
                <a href={site.social.twitter}>Twitter</a>
                <a href={site.social.instagram}>Instagram</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
