"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";

/** Light gradient cards — subtle tint only */
const CARD_STYLES = [
  "from-[#FF4F42]/[0.04] to-[#FF8E3C]/[0.04] border-[#FF6B35]/10 hover:from-[#FF4F42]/[0.07] hover:to-[#FF8E3C]/[0.07]",
  "from-[#612FFF]/[0.04] to-[#D200A3]/[0.04] border-[#612FFF]/10 hover:from-[#612FFF]/[0.07] hover:to-[#D200A3]/[0.07]",
  "from-[#0558FA]/[0.04] to-[#0BE2D6]/[0.04] border-[#0558FA]/10 hover:from-[#0558FA]/[0.07] hover:to-[#0BE2D6]/[0.07]",
  "from-[#FF8E3C]/[0.04] to-[#FEBC2E]/[0.04] border-[#FF8E3C]/10 hover:from-[#FF8E3C]/[0.07] hover:to-[#FEBC2E]/[0.07]",
  "from-[#0BE2D6]/[0.04] to-[#10B981]/[0.04] border-[#0BE2D6]/10 hover:from-[#0BE2D6]/[0.07] hover:to-[#10B981]/[0.07]",
  "from-[#D200A3]/[0.04] to-[#FF4F42]/[0.04] border-[#D200A3]/10 hover:from-[#D200A3]/[0.07] hover:to-[#FF4F42]/[0.07]",
];

const ICON_COLORS = ["#FF6B35", "#612FFF", "#0558FA", "#FF8E3C", "#0BE2D6", "#D200A3"];

const ICONS = [
  <svg key="bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="scale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="route" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="support" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function Features() {
  const { locale } = useLanguage();
  const t = translations.features;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features" className="py-20">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title[locale]}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {t.description[locale]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((feature, index) => (
            <div
              key={feature.title.en}
              className={`p-7 rounded-2xl bg-gradient-to-br ${CARD_STYLES[index]} border backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${ICON_COLORS[index]}15`, color: ICON_COLORS[index] }}
              >
                {ICONS[index]}
              </div>
              <h3
                className="text-lg font-semibold mb-2 text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title[locale]}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {feature.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
