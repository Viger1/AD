"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";
import { PAYMENT_ICON_MAP } from "./PaymentIcons";

const PAYMENT_CATEGORIES = [
  {
    key: "cards" as const,
    methods: ["Visa", "Mastercard", "American Express", "JCB", "Discover", "UnionPay"],
  },
  {
    key: "wallets" as const,
    methods: ["PayPal", "Apple Pay", "Google Pay", "Samsung Pay", "Klarna"],
  },
  {
    key: "local" as const,
    methods: ["Alipay", "WeChat Pay", "iDEAL", "Bancontact", "Boleto", "PIX"],
  },
  {
    key: "bnpl" as const,
    methods: ["Klarna", "Afterpay", "Affirm", "Zip"],
  },
];

export function PaymentMethods() {
  const { locale } = useLanguage();
  const t = translations.paymentMethods;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="payment-methods" className="py-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAYMENT_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className="p-6 rounded-2xl glass-card hover:shadow-lg hover:shadow-[var(--color-primary)]/[0.06] transition-all hover:-translate-y-0.5"
            >
              <h3
                className="text-base font-semibold mb-5 text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.categories[category.key][locale]}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {category.methods.map((method) => (
                  <div
                    key={method}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="rounded-lg overflow-hidden shadow-sm border border-black/[0.04] group-hover:shadow-md group-hover:-translate-y-0.5 transition-all">
                      {PAYMENT_ICON_MAP[method]}
                    </div>
                    <span className="text-[10px] font-medium text-[var(--color-text-muted)] text-center leading-tight">
                      {method}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
