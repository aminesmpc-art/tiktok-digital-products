import { MetadataRoute } from "next";
import { products, blogPosts } from "../../content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticPaths = ["", "/products", "/services", "/freebie", "/faq", "/about", "/contact", "/blog"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );
  const productPaths = products.map((p) => ({ url: `${base}/products/${p.slug}`, lastModified: new Date() }));
  const blogPaths = blogPosts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date() }));
  return [...staticPaths, ...productPaths, ...blogPaths];
}
