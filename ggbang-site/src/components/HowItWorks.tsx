"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";

export function HowItWorks() {
  const { locale } = useLanguage();
  const t = translations.howItWorks;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="py-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => (
            <div key={step.title.en} className="relative">
              {index < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[70%] w-[60%] border-t-2 border-dashed border-[var(--color-accent)]/25" />
              )}

              <div
                className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-[var(--color-primary)]/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3
                className="text-lg font-semibold mb-2 text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title[locale]}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {step.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
