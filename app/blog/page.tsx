import { blogPosts } from "@/content/data";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Growth notes</h1>
      <p className="text-slate-700">Fast takes on TikTok strategy, creative, and monetization.</p>
      <div className="space-y-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-xl bg-white border p-4 shadow">
            <p className="text-xs text-slate-500">{post.date}</p>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-slate-700">{post.excerpt}</p>
            <a className="text-brand.accent underline text-sm font-semibold" href={`/blog/${post.slug}`}>
              Read post
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
