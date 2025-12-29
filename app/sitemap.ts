import { MetadataRoute } from "next";
import { products, blogPosts } from "@/content/data";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/products", "/services", "/freebie", "/faq", "/about", "/contact", "/blog"].map(
    (path) => ({ url: absoluteUrl(path), lastModified: new Date() })
  );
  const productPaths = products.map((p) => ({ url: absoluteUrl(`/products/${p.slug}`), lastModified: new Date() }));
  const blogPaths = blogPosts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date() }));
  return [...staticPaths, ...productPaths, ...blogPaths];
}
