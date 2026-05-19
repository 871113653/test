import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = { slug: string; title: string; date: string; tags: string[]; summary: string; minutes: string };

export function getPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      minutes: readingTime(content).text,
    };
  }).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { meta: data as Omit<PostMeta, "slug"|"minutes">, content: processed.toString(), minutes: readingTime(content).text };
}
