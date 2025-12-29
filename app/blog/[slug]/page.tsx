import { notFound } from "next/navigation";
import { blogPosts } from "../../../content/data";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl space-y-3">
      <p className="text-xs text-slate-500">{post.published}</p>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
}
