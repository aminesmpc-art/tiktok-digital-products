import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
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
        <SiteHeader />
        <div className="with-header-offset mx-auto max-w-6xl px-4 pb-24 pt-6 space-y-10 md:pt-8">
          <main>{children}</main>
          <footer className="border-t pt-6 text-sm text-slate-600 space-y-4">
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-slate-900">{site.brand}</p>
                <p className="text-xs leading-relaxed">
                  Strategy, systems, and creative that drives TikTok revenue.
                </p>
              </div>
              <div className="flex gap-3 text-sm">
                <a className="hover:text-brand.accent" href={site.social.tiktok}>
                  TikTok
                </a>
                <a className="hover:text-brand.accent" href={site.social.twitter}>
                  Twitter
                </a>
                <a className="hover:text-brand.accent" href={site.social.instagram}>
                  Instagram
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a className="hover:text-brand.accent" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-brand.accent" href="/terms">
                Terms
              </a>
              <a className="hover:text-brand.accent" href="/contact">
                Contact
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
