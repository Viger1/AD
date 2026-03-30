"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "./useScrollReveal";

/**
 * Scrolling logo strip showing supported payment platforms & partners.
 * Similar to Airwallex's trust section.
 */

const LOGOS = [
  { name: "Visa", svg: <svg viewBox="0 0 80 26" className="h-7"><text x="0" y="21" fill="#1A1F71" fontWeight="800" fontSize="24" fontFamily="var(--font-display)">VISA</text></svg> },
  { name: "Mastercard", svg: <svg viewBox="0 0 44 28" className="h-7"><circle cx="16" cy="14" r="12" fill="#EB001B" opacity="0.9" /><circle cx="28" cy="14" r="12" fill="#F79E1B" opacity="0.9" /><path d="M22 5.5a12 12 0 000 17" fill="#FF5F00" opacity="0.7" /></svg> },
  { name: "PayPal", svg: <svg viewBox="0 0 80 24" className="h-6"><text x="0" y="19" fill="#003087" fontWeight="700" fontSize="20" fontFamily="var(--font-display)">Pay</text><text x="36" y="19" fill="#009CDE" fontWeight="700" fontSize="20" fontFamily="var(--font-display)">Pal</text></svg> },
  { name: "Stripe", svg: <svg viewBox="0 0 70 24" className="h-6"><text x="0" y="19" fill="#635BFF" fontWeight="700" fontSize="20" fontFamily="var(--font-display)">stripe</text></svg> },
  { name: "Apple Pay", svg: <svg viewBox="0 0 90 24" className="h-6"><text x="0" y="19" fill="#000000" fontWeight="600" fontSize="18" fontFamily="var(--font-display)"> Pay</text></svg> },
  { name: "Google Pay", svg: <svg viewBox="0 0 100 24" className="h-6"><text x="0" y="19" fontSize="17" fontFamily="var(--font-display)"><tspan fill="#4285F4" fontWeight="600">G</tspan><tspan fill="#EA4335" fontWeight="600">o</tspan><tspan fill="#FBBC05" fontWeight="600">o</tspan><tspan fill="#4285F4" fontWeight="600">g</tspan><tspan fill="#34A853" fontWeight="600">le</tspan><tspan fill="#5F6368" fontWeight="500"> Pay</tspan></text></svg> },
  { name: "Alipay", svg: <svg viewBox="0 0 80 24" className="h-6"><text x="0" y="19" fill="#1677FF" fontWeight="700" fontSize="18" fontFamily="var(--font-display)">Alipay</text></svg> },
  { name: "WeChat Pay", svg: <svg viewBox="0 0 110 24" className="h-6"><text x="0" y="19" fill="#07C160" fontWeight="700" fontSize="17" fontFamily="var(--font-display)">WeChat Pay</text></svg> },
  { name: "Shopify", svg: <svg viewBox="0 0 85 24" className="h-6"><text x="0" y="19" fill="#96BF48" fontWeight="700" fontSize="18" fontFamily="var(--font-display)">Shopify</text></svg> },
  { name: "WooCommerce", svg: <svg viewBox="0 0 130 24" className="h-6"><text x="0" y="19" fill="#7F54B3" fontWeight="700" fontSize="17" fontFamily="var(--font-display)">WooCommerce</text></svg> },
];

export function TrustLogos() {
  const { locale } = useLanguage();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-14 overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-[var(--color-text-muted)] mb-8 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
          {locale === "zh" ? "受到全球商户信赖的支付伙伴" : "Trusted Payment Partners Worldwide"}
        </p>

        {/* Infinite scroll container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll gap-12 items-center">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
