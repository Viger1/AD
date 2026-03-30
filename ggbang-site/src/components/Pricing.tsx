"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";

export function Pricing() {
  const { locale } = useLanguage();
  const t = translations.pricing;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="py-20">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {t.plans.map((plan) => {
            const isHighlight = "highlight" in plan && plan.highlight;
            const rate = typeof plan.rate === "string" ? plan.rate : plan.rate[locale];
            const rateLabel =
              typeof plan.rateLabel === "string"
                ? plan.rateLabel
                : plan.rateLabel[locale];
            const features = plan.features[locale];

            return (
              <div
                key={plan.name.en}
                className={`relative p-8 rounded-2xl transition-all ${
                  isHighlight
                    ? "glass-card shadow-xl shadow-[var(--color-accent)]/[0.08] scale-[1.03] border-[var(--color-accent)]/30"
                    : "glass-card hover:shadow-lg hover:-translate-y-0.5"
                }`}
                style={isHighlight ? { borderColor: "rgba(255,107,53,0.3)" } : undefined}
              >
                {isHighlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-accent)] text-xs font-bold text-white tracking-wide shadow-md shadow-[var(--color-accent)]/30"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.popular[locale]}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="text-lg font-semibold text-[var(--color-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name[locale]}
                  </h3>
                </div>

                <div className="mb-6">
                  <div
                    className="text-3xl font-bold text-[var(--color-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price[locale]}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-1">
                    {rate} · {rateLabel}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                    >
                      <svg
                        className="w-4 h-4 text-[var(--color-success)] mt-0.5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    isHighlight
                      ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-md shadow-[var(--color-accent)]/20"
                      : "border-2 border-[var(--color-primary)]/15 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/[0.04]"
                  }`}
                >
                  {plan.cta[locale]}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
