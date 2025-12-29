import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const brand = process.env.NEXT_PUBLIC_BRAND_NAME || "TikTok Strategy Studio";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: `${brand} | TikTok growth systems that convert`,
  description: "Conversion-focused TikTok strategy, digital products, and templates to monetize your audience.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${brand} | TikTok growth systems that convert`,
    description: "Conversion-focused TikTok strategy, digital products, and templates to monetize your audience.",
    url: siteUrl,
    siteName: brand
  },
  twitter: {
    card: "summary_large_image",
    title: brand
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div className="min-h-screen flex flex-col">
          <NavBar brand={brand} />
          <main className="flex-1 px-4 md:px-10 lg:px-16 py-8 space-y-12">{children}</main>
          <Footer brand={brand} />
        </div>
      </body>
    </html>
  );
}
