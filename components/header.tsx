import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">NeonLog</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/posts">文章</Link>
          <Link href="/about">关于</Link>
          <Link href="/rss.xml">RSS</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
