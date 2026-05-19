import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getPosts();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">全部文章</h1>
      {posts.map((p) => (
        <Link key={p.slug} href={`/posts/${p.slug}`} className="block card rounded-xl p-4">
          <h2 className="font-medium">{p.title}</h2>
          <p className="text-sm text-[var(--muted)]">{p.date} · {p.minutes}</p>
          <p className="text-sm mt-2">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}
