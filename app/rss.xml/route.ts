import { getPosts } from "@/lib/posts";

export async function GET() {
  const posts = getPosts();
  const items = posts.map((p) => `<item><title>${p.title}</title><link>https://example.com/posts/${p.slug}</link><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${p.summary}</description></item>`).join("");
  const xml = `<?xml version="1.0"?><rss version="2.0"><channel><title>NeonLog</title><link>https://example.com</link><description>科技感混合博客</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml" } });
}
