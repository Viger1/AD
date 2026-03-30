"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "./useScrollReveal";

const PRODUCTS = {
  zh: [
    {
      title: "全球收款",
      description: "一个 API 接入 200+ 支付方式，覆盖 50+ 国家。客户用最熟悉的方式付款，你的转化率更高。",
      gradient: "from-[#FF4F42] to-[#FF8E3C]",
      iconColor: "#FF6B35",
    },
    {
      title: "智能风控",
      description: "AI 驱动的实时风控引擎，自动识别欺诈交易，拒付率降低 60%+，为你的每笔收入保驾护航。",
      gradient: "from-[#612FFF] to-[#D200A3]",
      iconColor: "#612FFF",
    },
    {
      title: "多币种结算",
      description: "支持 30+ 币种自动换汇，实时汇率锁定，资金 T+2 到账。告别复杂的跨境资金流转。",
      gradient: "from-[#0558FA] to-[#0BE2D6]",
      iconColor: "#0558FA",
    },
    {
      title: "数据洞察",
      description: "可视化交易看板，转化漏斗分析，支付成功率监控。用数据驱动每一个增长决策。",
      gradient: "from-[#0BE2D6] to-[#10B981]",
      iconColor: "#0D9668",
    },
  ],
  en: [
    {
      title: "Global Collections",
      description: "One API, 200+ payment methods, 50+ countries. Let customers pay their preferred way and watch conversions rise.",
      gradient: "from-[#FF4F42] to-[#FF8E3C]",
      iconColor: "#FF6B35",
    },
    {
      title: "Smart Fraud Prevention",
      description: "AI-powered real-time fraud detection that reduces chargebacks by 60%+, protecting every dollar of revenue.",
      gradient: "from-[#612FFF] to-[#D200A3]",
      iconColor: "#612FFF",
    },
    {
      title: "Multi-Currency Settlement",
      description: "Auto-convert 30+ currencies with locked-in real-time rates. Funds arrive T+2. No more complex cross-border transfers.",
      gradient: "from-[#0558FA] to-[#0BE2D6]",
      iconColor: "#0558FA",
    },
    {
      title: "Data Insights",
      description: "Visual transaction dashboard, conversion funnels, and success rate monitoring. Data-driven growth decisions, made easy.",
      gradient: "from-[#0BE2D6] to-[#10B981]",
      iconColor: "#0D9668",
    },
  ],
};

function CardIllustration({ index, color }: { readonly index: number; readonly color: string }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <circle cx="100" cy="60" r="40" fill="none" stroke={color} strokeWidth="0.8" opacity="0.15" />
        <ellipse cx="100" cy="60" rx="40" ry="15" fill="none" stroke={color} strokeWidth="0.6" opacity="0.1" />
        <ellipse cx="100" cy="60" rx="15" ry="40" fill="none" stroke={color} strokeWidth="0.6" opacity="0.1" />
        {[[70, 35], [130, 45], [85, 80], [120, 75], [100, 25], [60, 60], [140, 60]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3.5" fill={color} opacity="0.5" />
            <circle cx={cx} cy={cy} r="7" fill={color} opacity="0.08" />
          </g>
        ))}
        <line x1="70" y1="35" x2="130" y2="45" stroke={color} strokeWidth="0.6" opacity="0.12" />
        <line x1="85" y1="80" x2="120" y2="75" stroke={color} strokeWidth="0.6" opacity="0.12" />
        <line x1="100" y1="25" x2="140" y2="60" stroke={color} strokeWidth="0.6" opacity="0.12" />
        <line x1="60" y1="60" x2="100" y2="25" stroke={color} strokeWidth="0.6" opacity="0.12" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <path d="M100 15 L140 35 L140 65 Q140 95 100 110 Q60 95 60 65 L60 35 Z" fill={color} opacity="0.04" stroke={color} strokeWidth="0.8" strokeOpacity="0.15" />
        <path d="M100 25 L130 40 L130 63 Q130 87 100 100 Q70 87 70 63 L70 40 Z" fill={color} opacity="0.06" />
        <polyline points="85,60 95,72 118,48" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        {[
          { symbol: "$", x: 50, y: 40, size: 28 },
          { symbol: "€", x: 100, y: 55, size: 24 },
          { symbol: "¥", x: 145, y: 38, size: 26 },
          { symbol: "£", x: 75, y: 85, size: 22 },
          { symbol: "₩", x: 130, y: 82, size: 20 },
        ].map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r={c.size * 0.7} fill={color} opacity="0.05" />
            <text x={c.x} y={c.y + c.size * 0.35} textAnchor="middle" fill={color} fontSize={c.size} fontWeight="600" opacity="0.35" fontFamily="var(--font-display)">
              {c.symbol}
            </text>
          </g>
        ))}
        <path d="M72 42 Q86 33 96 48" fill="none" stroke={color} strokeWidth="0.8" opacity="0.15" />
        <path d="M118 58 Q130 50 140 42" fill="none" stroke={color} strokeWidth="0.8" opacity="0.15" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="w-full h-auto">
      {[
        { x: 40, h: 45 }, { x: 62, h: 60 }, { x: 84, h: 38 },
        { x: 106, h: 72 }, { x: 128, h: 55 }, { x: 150, h: 85 },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x} y={105 - bar.h} width="16" height={bar.h} rx="3" fill={color} opacity={0.06 + i * 0.02} />
          <rect x={bar.x} y={105 - bar.h} width="16" height={bar.h * 0.4} rx="3" fill={color} opacity={0.1 + i * 0.03} />
        </g>
      ))}
      <polyline
        points="48,80 70,65 92,82 114,50 136,63 158,30"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      <circle cx="158" cy="30" r="4" fill={color} opacity="0.45" />
      <circle cx="158" cy="30" r="8" fill={color} opacity="0.08" />
    </svg>
  );
}

export function ProductShowcase() {
  const { locale } = useLanguage();
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const products = PRODUCTS[locale];

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {locale === "zh" ? "一站式支付基础设施" : "All-in-One Payment Infrastructure"}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {locale === "zh"
              ? "从收款到结算，GGBANG 覆盖跨境支付全链路"
              : "From collections to settlement, GGBANG covers the entire cross-border payment journey"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative rounded-2xl glass-card p-7 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {/* Gradient accent bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

              <div className="flex flex-col h-full">
                <h3
                  className="text-xl font-semibold text-[var(--color-text)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {product.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <CardIllustration index={index} color={product.iconColor} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
