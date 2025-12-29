import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/data";
import { markdownToHtml } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-6">
      <p className="text-xs font-semibold uppercase text-brand.accent">Article</p>
      <div className="space-y-2">
        <p className="text-xs text-slate-500">{post.date}</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{post.title}</h1>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
        className="prose prose-slate max-w-none text-base leading-relaxed"
      />
      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Ready to implement this?</p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link
            href="/products"
            className="rounded-full bg-brand.accent px-4 py-3 font-semibold text-white shadow hover:translate-y-[-1px]"
          >
            Shop TikTok kits
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-200 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
          >
            Book a strategy call
          </Link>
        </div>
      </div>
      <StickyCTA label="Shop TikTok kits" href="/products" subtext="Templates for faster execution" />
    </article>
  );
}
