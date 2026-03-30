import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | GGBANG Blog`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <header className="border-b border-[var(--color-border)] bg-white/60 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-accent)]" style={{ fontFamily: "var(--font-display)" }}>
            GGBANG
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)]">
            <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
            <Link href="/blog" className="text-[var(--color-accent)]">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="mb-6 text-sm text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-[var(--color-accent)]">Blog</Link>
          {" / "}
          <span className="text-[var(--color-text-secondary)]">{article.lang === "zh" ? "中文" : "EN"}</span>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              {article.category}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">{article.date} · {article.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {article.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{article.excerpt}</p>
        </div>

        <article className="prose-custom" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="mt-16 p-8 rounded-2xl glass-card text-center">
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
            {article.lang === "zh" ? "需要 AI 内容营销服务？" : "Need AI Content Marketing?"}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm mb-4">
            {article.lang === "zh" ? "让我们帮你的品牌被 AI 和用户发现。" : "Let us help your brand get discovered by AI and humans."}
          </p>
          <Link href="/#contact" className="inline-block px-8 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-[var(--color-accent)]/20">
            Get Started
          </Link>
        </div>
      </main>

      <footer className="py-10 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} GGBANG. AI Content Marketing & Distribution.</p>
      </footer>
    </div>
  );
}
