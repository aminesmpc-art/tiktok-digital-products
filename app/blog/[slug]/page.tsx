import { notFound } from "next/navigation";
import { blogPosts } from "../../content/data";
import { markdownToHtml } from "../../lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-4">
      <p className="text-xs text-slate-500">{post.date}</p>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }} className="prose prose-slate" />
    </article>
  );
}
