import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";
import { BlogList } from "@/components/BlogList";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Blog - GGBANG | 跨境支付知识库",
  description:
    "Cross-border payment guides, tips, and best practices for DTC brands and independent e-commerce stores. 独立站支付指南与跨境电商收款攻略。",
};

export default function BlogPage() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Blog
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg mb-12">
            跨境支付知识库 · Cross-Border Payment Knowledge Base
          </p>
          <BlogList articles={articles} />
        </div>
      </main>
      <Footer />
    </>
  );
}
