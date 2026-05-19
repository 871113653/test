import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { Comments } from "@/components/comments";

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return (
      <article className="space-y-6">
        <header>
          <h1 className="text-3xl font-bold">{post.meta.title}</h1>
          <p className="text-[var(--muted)]">{post.meta.date} · {post.minutes}</p>
        </header>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Comments />
      </article>
    );
  } catch {
    notFound();
  }
}
