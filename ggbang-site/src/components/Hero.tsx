"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  const { locale } = useLanguage();
  const t = translations.hero;
  const stats = t.stats;

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split layout: text left, dashboard right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[var(--color-primary)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              {t.badge[locale]}
            </div>

            <h1
              className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] mb-6 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.titleLine1[locale]}
              <br />
              <span className="text-[var(--color-accent)]">
                {t.titleHighlight[locale]}
              </span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t.description[locale]}
            </p>

            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-[#612FFF] text-white font-semibold hover:bg-[#7043FF] transition-all shadow-lg shadow-[#612FFF]/25 text-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.ctaPrimary[locale]}
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3.5 rounded-xl glass-card text-[var(--color-primary)] font-semibold hover:bg-white/80 transition-all text-lg shadow-sm"
              >
                {t.ctaSecondary[locale]}
              </a>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="animate-fade-in-up animate-delay-200 hidden lg:block">
            <DashboardMockup />
          </div>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in-up animate-delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {(Object.values(stats) as Array<{ value: string; zh: string; en: string }>).map((stat) => (
            <div
              key={stat.value}
              className="text-center p-4 rounded-xl glass-card shadow-sm"
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1 font-medium">
                {stat[locale]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
