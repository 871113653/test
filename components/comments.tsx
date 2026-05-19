"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export function Comments() {
  const { resolvedTheme } = useTheme();
  return (
    <Giscus
      repo="YOUR_NAME/YOUR_REPO"
      repoId="YOUR_REPO_ID"
      category="Announcements"
      categoryId="YOUR_CATEGORY_ID"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      lang="zh-CN"
    />
  );
}
