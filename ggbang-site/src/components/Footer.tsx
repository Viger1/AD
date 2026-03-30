"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { GGBangLogo } from "./GGBangLogo";

export function Footer() {
  const { locale } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="py-12 border-t border-white/20 backdrop-blur-md bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="mb-3">
              <GGBangLogo variant="full" size={30} />
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {t.tagline[locale]}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              {t.product[locale]}
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
              <li><a href="/#payment-methods" className="hover:text-[var(--color-accent)] transition-colors">{translations.nav.payment[locale]}</a></li>
              <li><a href="/#features" className="hover:text-[var(--color-accent)] transition-colors">{translations.nav.features[locale]}</a></li>
              <li><a href="/#pricing" className="hover:text-[var(--color-accent)] transition-colors">{translations.nav.pricing[locale]}</a></li>
              <li><a href="/docs" className="hover:text-[var(--color-accent)] transition-colors">{t.apiDocs[locale]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              {t.resources[locale]}
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
              <li><a href="/docs" className="hover:text-[var(--color-accent)] transition-colors">{t.integrationGuide[locale]}</a></li>
              <li><a href="/docs" className="hover:text-[var(--color-accent)] transition-colors">{t.devDocs[locale]}</a></li>
              <li><a href="/#faq" className="hover:text-[var(--color-accent)] transition-colors">{translations.nav.faq[locale]}</a></li>
              <li><a href="/blog" className="hover:text-[var(--color-accent)] transition-colors">{t.blog[locale]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              {locale === "zh" ? "公司" : "Company"}
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
              <li><a href="/about" className="hover:text-[var(--color-accent)] transition-colors">{locale === "zh" ? "关于我们" : "About Us"}</a></li>
              <li>sales@ggbang.com</li>
              <li>support@ggbang.com</li>
              <li><a href="https://github.com/Viger1/AD" className="hover:text-[var(--color-accent)] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <p>&copy; {new Date().getFullYear()} GGBANG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">{t.privacy[locale]}</a>
            <a href="/terms" className="hover:text-[var(--color-accent)] transition-colors">{t.terms[locale]}</a>
            <a href="/about" className="hover:text-[var(--color-accent)] transition-colors">{locale === "zh" ? "关于" : "About"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
