import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";
import { articles } from "@/content/articles";
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
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <ScrollBackground />
      <Header />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-[var(--color-text-muted)] mb-6">
            <a href="/" className="hover:text-[var(--color-accent)]">Home</a>
            {" / "}
            <a href="/blog" className="hover:text-[var(--color-accent)]">Blog</a>
            {" / "}
            <span className="text-[var(--color-text-secondary)]">{article.title}</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#612FFF]/10 text-[#612FFF]">
                {article.category}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {article.date}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                · {article.readTime}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article body */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl glass-card text-center">
            <h3
              className="text-xl font-semibold mb-3 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.lang === "zh"
                ? "想了解 GGBANG 如何帮你解决支付难题？"
                : "Want to see how GGBANG solves your payment challenges?"}
            </h3>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl bg-[#612FFF] text-white font-semibold hover:bg-[#7043FF] transition-all shadow-lg shadow-[#612FFF]/20"
            >
              {article.lang === "zh" ? "免费咨询" : "Get Started Free"}
            </a>
          </div>
        </article>
      </main>
      <Footer />

      {/* FAQ Schema */}
      {article.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
