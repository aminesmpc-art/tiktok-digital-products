import Link from "next/link";
import { blogPosts } from "../../content/data";

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Insights</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.slug} className="rounded-lg border p-4">
            <p className="text-xs text-slate-500">{post.published}</p>
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
