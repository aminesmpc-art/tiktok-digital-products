import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/data";
import { markdownToHtml } from "@/lib/utils";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-6">
      <p className="text-[11px] font-semibold uppercase text-brand.accent">Article</p>
      <div className="space-y-2">
        <p className="text-xs text-slate-500">{post.date}</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{post.title}</h1>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
        className="prose prose-slate max-w-none text-base leading-relaxed"
      />
      <div className="rounded-3xl border bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm font-semibold text-slate-900">Ready to implement this?</p>
        <div className="mt-3 flex flex-col gap-3 text-sm sm:flex-row">
          <Button href="/products" className="w-full justify-center sm:w-auto">
            Shop TikTok kits
          </Button>
          <Button href="/services" variant="secondary" className="w-full justify-center sm:w-auto">
            Book a strategy call
          </Button>
        </div>
      </div>
      <StickyCTA label="Shop TikTok kits" href="/products" subtext="Templates for faster execution" />
    </article>
  );
}
