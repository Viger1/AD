"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { locale } = useLanguage();
  const t = translations.faq;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-20">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title[locale]}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            {t.description[locale]}
          </p>
        </div>

        <div className="space-y-3">
          {t.items.map((faq, index) => (
            <div
              key={faq.question.en}
              className="rounded-xl glass-card overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/40 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold pr-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
                  {faq.question[locale]}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-white/30">
                  <div className="pt-4">{faq.answer[locale]}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
