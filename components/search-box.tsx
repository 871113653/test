"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Post = { slug: string; title: string; tags: string[]; summary: string };

export function SearchBox({ posts }: { posts: Post[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => posts.filter(p => `${p.title} ${p.tags.join(" ")} ${p.summary}`.toLowerCase().includes(q.toLowerCase())), [q, posts]);
  return (
    <section className="space-y-3">
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="搜索文章 / 标签" className="w-full card rounded-xl p-3" />
      {q && <div className="space-y-2">{filtered.map(p => <Link key={p.slug} href={`/posts/${p.slug}`} className="block card rounded-xl p-3">{p.title}</Link>)}</div>}
    </section>
  );
}
