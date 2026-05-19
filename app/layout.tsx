import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: "NeonLog | 科技感混合博客",
  description: "技术 + 生活 的个人博客",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
