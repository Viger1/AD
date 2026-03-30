"use client";

import { useState, type FormEvent } from "react";

/* ───── Data ───── */

const PLATFORMS = [
  { name: "知乎 Zhihu", icon: "📝" },
  { name: "Reddit", icon: "🔗" },
  { name: "Twitter / X", icon: "🐦" },
  { name: "小红书", icon: "📕" },
  { name: "V2EX", icon: "💻" },
  { name: "Medium", icon: "✍️" },
  { name: "Dev.to", icon: "👩‍💻" },
  { name: "Hacker News", icon: "🟧" },
];

const SERVICES = [
  {
    title: "Multi-Platform Distribution",
    titleZh: "多平台自动分发",
    description:
      "Your content goes everywhere your customers are. We craft platform-native posts for Zhihu, Reddit, Twitter/X, Xiaohongshu, V2EX, Medium, and more — automatically.",
    descriptionZh:
      "让你的内容出现在客户聚集的每一个平台。我们为知乎、Reddit、Twitter/X、小红书、V2EX、Medium 等平台定制原生内容并自动发布。",
    icon: "🚀",
    color: "#612FFF",
  },
  {
    title: "White-Hat GEO Optimization",
    titleZh: "合规 GEO 优化",
    description:
      "Get recommended by ChatGPT, Perplexity, and Google AI — the right way. We create genuine, authoritative content with proper Schema markup that AI search engines trust and cite.",
    descriptionZh:
      "让 ChatGPT、Perplexity、Google AI 主动推荐你的品牌——用合规的方式。我们创建真实、权威的内容，配合标准化 Schema 标记，让 AI 搜索引擎信任并引用。",
    icon: "🎯",
    color: "#FF6B35",
  },
  {
    title: "AI-Powered Content Creation",
    titleZh: "AI 驱动内容生产",
    description:
      "From one brief, we generate dozens of platform-specific posts — each tailored to the platform's tone, format, and audience. Human-reviewed before publishing.",
    descriptionZh:
      "从一份简报生成数十篇平台定制内容——每篇都适配平台风格、格式和受众。发布前经人工审核把关。",
    icon: "🤖",
    color: "#0BE2D6",
  },
];

const PROCESS = [
  { step: "01", title: "Tell Us About Your Product", titleZh: "告诉我们你的产品", description: "Share your product, target audience, and goals. We'll research your market and competitors.", descriptionZh: "分享你的产品、目标用户和推广目标。我们会调研你的市场和竞品。" },
  { step: "02", title: "We Create Content", titleZh: "我们生产内容", description: "AI generates platform-specific content based on your product. Each piece is reviewed by our team for quality and accuracy.", descriptionZh: "AI 基于你的产品生成各平台定制内容。每篇内容经团队审核确保质量和准确性。" },
  { step: "03", title: "Review & Approve", titleZh: "审核与确认", description: "You review all content before it goes live. Approve, edit, or reject — you have full control.", descriptionZh: "所有内容发布前由你审核。通过、修改或拒绝——你拥有完全控制权。" },
  { step: "04", title: "Auto-Distribute & Track", titleZh: "自动分发与追踪", description: "Approved content is published across platforms automatically. Track performance in real-time.", descriptionZh: "审核通过的内容自动发布到各平台。实时追踪效果数据。" },
];

const PRICING = [
  {
    name: "Starter",
    nameZh: "基础版",
    price: "$299",
    period: "/month",
    features: [
      "3 platforms",
      "10 posts per month",
      "AI content generation",
      "Basic performance report",
      "Email support",
    ],
    featuresZh: [
      "3 个平台",
      "每月 10 篇内容",
      "AI 内容生成",
      "基础效果报告",
      "邮件支持",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    nameZh: "增长版",
    price: "$799",
    period: "/month",
    features: [
      "6 platforms",
      "30 posts per month",
      "AI content + GEO optimization",
      "Competitor monitoring",
      "Weekly performance report",
      "Dedicated account manager",
    ],
    featuresZh: [
      "6 个平台",
      "每月 30 篇内容",
      "AI 内容 + GEO 优化",
      "竞品监控",
      "每周效果报告",
      "专属客户经理",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    nameZh: "规模版",
    price: "Custom",
    period: "",
    features: [
      "All platforms",
      "Unlimited posts",
      "Full GEO optimization suite",
      "AI search visibility monitoring",
      "Real-time dashboard",
      "Priority support",
    ],
    featuresZh: [
      "全平台覆盖",
      "无限内容",
      "完整 GEO 优化方案",
      "AI 搜索可见度监控",
      "实时数据看板",
      "优先支持",
    ],
    highlight: false,
  },
];

const FAQ_ITEMS = [
  {
    q: "What is GEO and how is it different from SEO?",
    qZh: "什么是 GEO？和 SEO 有什么区别？",
    a: "GEO (Generative Engine Optimization) optimizes your content to be cited by AI search engines like ChatGPT and Perplexity. While SEO focuses on Google ranking, GEO focuses on being the answer AI gives to users. We only use white-hat methods — creating genuine, high-quality content.",
    aZh: "GEO（生成式引擎优化）让你的内容被 ChatGPT、Perplexity 等 AI 搜索引擎引用。SEO 关注 Google 排名，GEO 关注成为 AI 给用户的答案。我们只使用白帽方法——创建真实、高质量的内容。",
  },
  {
    q: "Is this the same as the 'AI poisoning' exposed on CCTV 315?",
    qZh: "这和央视315曝光的'AI投毒'一样吗？",
    a: "No. What 315 exposed was black-hat GEO — fabricating fake products and fake reviews to manipulate AI. We do white-hat GEO: creating genuine, helpful content about real products, using proper structured data. The content is true, the products are real, and every post is human-reviewed.",
    aZh: "不一样。315 曝光的是黑帽 GEO——虚构假产品、假评测来操控 AI。我们做的是白帽 GEO：为真实产品创建真实有价值的内容，使用标准结构化数据。内容真实、产品真实、每篇都经过人工审核。",
  },
  {
    q: "Do I need to provide content, or do you create everything?",
    qZh: "我需要提供内容吗？还是你们全部创建？",
    a: "We create everything. You just provide a product brief — what your product does, who it's for, and what makes it different. Our AI + human team handles the rest.",
    aZh: "我们全部创建。你只需提供产品简介——产品做什么、面向谁、有什么差异化。我们的 AI + 人工团队处理剩下的一切。",
  },
  {
    q: "Can I review content before it's published?",
    qZh: "内容发布前可以审核吗？",
    a: "Absolutely. Every piece of content goes through your approval before publishing. You can approve, request changes, or reject via Telegram, email, or our dashboard.",
    aZh: "当然。每篇内容发布前都需要你的审批。你可以通过 Telegram、邮件或看板进行通过、修改或拒绝。",
  },
  {
    q: "Which platforms do you support?",
    qZh: "支持哪些平台？",
    a: "Currently: Zhihu, Reddit, Twitter/X, Xiaohongshu, V2EX, Medium, Dev.to, and Hacker News. We're adding more platforms regularly based on client needs.",
    aZh: "目前支持：知乎、Reddit、Twitter/X、小红书、V2EX、Medium、Dev.to、Hacker News。我们根据客户需求持续新增平台。",
  },
  {
    q: "How do you measure results?",
    qZh: "如何衡量效果？",
    a: "We track: post views, engagement (likes/comments/shares), traffic to your site, and most importantly — whether your brand appears in AI search results for target queries.",
    aZh: "我们追踪：内容浏览量、互动数据（点赞/评论/分享）、导入网站的流量，以及最重要的——你的品牌是否出现在目标查询的 AI 搜索结果中。",
  },
];

/* ───── Components ───── */

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-xl font-bold tracking-tight text-[var(--color-accent)]" style={{ fontFamily: "var(--font-display)" }}>
          GGBANG
        </span>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--color-text-secondary)]">
          <a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-[var(--color-accent)] transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-[var(--color-accent)] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[var(--color-accent)] transition-colors">FAQ</a>
        </nav>
        <a href="#contact" className="px-5 py-2 rounded-lg bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors shadow-md shadow-[var(--color-accent)]/20">
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[var(--color-accent)]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-orange)]/[0.04] rounded-full blur-[80px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-light)] text-sm font-medium text-[var(--color-accent)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
          AI-Powered Content Marketing
        </div>
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-[var(--color-text)]">
          Get Your Brand Discovered<br />
          <span className="text-[var(--color-accent)]">by AI and Humans</span>
        </h1>
        <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed">
          We create genuine, high-quality content about your product and distribute it across platforms where your customers search — from Zhihu and Reddit to ChatGPT and Perplexity.
        </p>
        <p className="animate-fade-in-up animate-delay-200 text-base text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
          让你的品牌被 AI 搜索引擎和真实用户发现。合规的 GEO 优化 + 多平台自动分发。
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact" className="px-8 py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-[var(--color-accent)]/25 text-lg">
            Start Growing
          </a>
          <a href="#how-it-works" className="px-8 py-3.5 rounded-xl border-2 border-[var(--color-accent)]/15 text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)]/[0.04] transition-colors text-lg">
            See How It Works
          </a>
        </div>
        {/* Platform badges */}
        <div className="animate-fade-in-up animate-delay-400 flex flex-wrap justify-center gap-3">
          {PLATFORMS.map((p) => (
            <span key={p.name} className="px-3 py-1.5 rounded-lg glass-card text-sm text-[var(--color-text-secondary)] font-medium">
              {p.icon} {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            我们的服务 · Our Services
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl glass-card hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-1 text-[var(--color-text)]">{s.title}</h3>
              <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{s.titleZh}</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{s.description}</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{s.descriptionZh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[var(--color-bg-alt)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">合作流程 · 4 simple steps</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="relative">
              {i < PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[70%] w-[60%] border-t-2 border-dashed border-[var(--color-accent)]/20" />
              )}
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-[var(--color-accent)]/20">
                {p.step}
              </div>
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-[var(--color-accent)] font-medium mb-2">{p.titleZh}</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">定价方案 · Transparent pricing</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((plan) => (
            <div key={plan.name} className={`relative p-8 rounded-2xl transition-all ${plan.highlight ? "glass-card shadow-xl scale-[1.03] border-[var(--color-accent)]/30" : "glass-card hover:shadow-lg"}`} style={plan.highlight ? { borderColor: "rgba(97,47,255,0.3)" } : undefined}>
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-accent)] text-xs font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">{plan.nameZh}</p>
              <div className="text-3xl font-bold mb-1">{plan.price}<span className="text-base font-normal text-[var(--color-text-muted)]">{plan.period}</span></div>
              <ul className="space-y-2.5 my-6">
                {plan.features.map((f, i) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <svg className="w-4 h-4 text-[var(--color-success)] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{f} <span className="text-[var(--color-text-muted)]">/ {plan.featuresZh[i]}</span></span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${plan.highlight ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-md shadow-[var(--color-accent)]/20" : "border-2 border-[var(--color-accent)]/15 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/[0.04]"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[var(--color-bg-alt)]/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">常见问题 · Frequently Asked Questions</p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group rounded-xl glass-card overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-white/40 transition-colors font-semibold text-[var(--color-text)]">
                <div>
                  <span className="block">{item.q}</span>
                  <span className="block text-sm font-medium text-[var(--color-text-muted)] mt-0.5">{item.qZh}</span>
                </div>
                <svg className="w-5 h-5 shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180 ml-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed border-t border-[var(--color-border)]">
                <p className="mt-4 text-[var(--color-text-secondary)]">{item.a}</p>
                <p className="mt-2 text-[var(--color-text-muted)] text-xs">{item.aZh}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/60 border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all";

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Talk</h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10">
          告诉我们你的产品，我们来帮你推广。<br />Tell us about your product and we&apos;ll handle the rest.
        </p>
        {submitted ? (
          <div className="p-10 rounded-2xl glass-card">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Received!</h3>
            <p className="text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours. 我们将在 24 小时内回复。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-card text-left space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Name / 姓名 *</label>
                <input type="text" required className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" required className={inputClass} placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Product / Company 你的产品 *</label>
              <input type="text" required className={inputClass} placeholder="What do you sell? Your website URL" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Target Platforms 目标平台</label>
              <input type="text" className={inputClass} placeholder="e.g. Zhihu, Reddit, Twitter..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Anything else? 补充说明</label>
              <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Budget, timeline, specific goals..." />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-[var(--color-accent)]/25">
              Send Inquiry / 提交咨询
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
      <p className="mb-2">&copy; {new Date().getFullYear()} GGBANG. AI Content Marketing & Distribution.</p>
      <p>contact@ggbangco.com</p>
    </footer>
  );
}

/* ───── Page ───── */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
