"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { GGBangLogo } from "./GGBangLogo";

const NAV_ITEMS = [
  { key: "payment" as const, href: "/#payment-methods" },
  { key: "features" as const, href: "/#features" },
  { key: "howItWorks" as const, href: "/#how-it-works" },
  { key: "pricing" as const, href: "/#pricing" },
  { key: "faq" as const, href: "/#faq" },
  { key: "blog" as const, href: "/blog" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, toggle } = useLanguage();
  const t = translations.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30 shadow-sm shadow-black/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <GGBangLogo variant="full" size={34} />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {t[item.key][locale]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/60 transition-all border border-[var(--color-border)]"
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <a
              href="/#contact"
              className="px-5 py-2 rounded-lg bg-[#612FFF] text-white text-sm font-semibold hover:bg-[#7043FF] transition-colors shadow-md shadow-[#612FFF]/20"
            >
              {t.cta[locale]}
            </a>
          </div>

          <button
            className="md:hidden text-[var(--color-text)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-white/30">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                onClick={() => setMenuOpen(false)}
              >
                {t[item.key][locale]}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/30">
              <button
                onClick={toggle}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]"
              >
                {locale === "zh" ? "EN" : "中文"}
              </button>
              <a
                href="/#contact"
                className="flex-1 text-center py-2 rounded-lg bg-[var(--color-accent)] text-white text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {t.cta[locale]}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
