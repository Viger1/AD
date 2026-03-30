"use client";

import type { Article } from "@/content/articles";

interface BlogListProps {
  readonly articles: readonly Article[];
}

export function BlogList({ articles }: BlogListProps) {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <a
          key={article.slug}
          href={`/blog/${article.slug}`}
          className="block p-6 rounded-2xl glass-card hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#612FFF]/10 text-[#612FFF]">
              {article.category}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              {article.date}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              · {article.readTime}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)]">
              {article.lang === "zh" ? "中文" : "EN"}
            </span>
          </div>
          <h2
            className="text-xl font-semibold text-[var(--color-text)] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {article.title}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
            {article.excerpt}
          </p>
        </a>
      ))}
    </div>
  );
}
