import { articles } from "@/content/articles";
import Link from "next/link";

export const metadata = {
  title: "Blog | GGBANG - AI Content Marketing Insights",
  description: "Insights on AI content marketing, GEO optimization, and multi-platform distribution. AI 内容营销、GEO 优化与多平台分发的实战洞察。",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="border-b border-[var(--color-border)] bg-white/60 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-accent)]" style={{ fontFamily: "var(--font-display)" }}>
            GGBANG
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)]">
            <Link href="/#services" className="hover:text-[var(--color-accent)]">Services</Link>
            <Link href="/#pricing" className="hover:text-[var(--color-accent)]">Pricing</Link>
            <Link href="/blog" className="text-[var(--color-accent)]">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
          Blog
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg mb-12">
          AI 内容营销洞察 · AI Content Marketing Insights
        </p>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block p-6 rounded-2xl glass-card hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  {article.category}
                </span>
                <span className="text-sm text-[var(--color-text-muted)]">{article.date}</span>
                <span className="text-sm text-[var(--color-text-muted)]">· {article.readTime}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)]">
                  {article.lang === "zh" ? "中文" : "EN"}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {article.title}
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-10 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} GGBANG. AI Content Marketing & Distribution.</p>
      </footer>
    </div>
  );
}
