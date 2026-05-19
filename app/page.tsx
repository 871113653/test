import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { SearchBox } from "@/components/search-box";

export default function Home() {
  const posts = getPosts();
  return (
    <div className="space-y-8">
      <section className="card rounded-2xl p-6">
        <h1 className="text-3xl font-bold">科技感混合博客</h1>
        <p className="text-[var(--muted)] mt-2">记录技术思考，也分享生活灵感。</p>
        <div className="mt-4"><Link href="/posts" className="underline">查看全部文章</Link></div>
      </section>
      <SearchBox posts={posts} />
    </div>
  );
}
