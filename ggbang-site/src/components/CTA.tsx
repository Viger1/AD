"use client";

import { useState, useRef, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useScrollReveal } from "./useScrollReveal";

type SubmitState = "idle" | "submitting" | "success" | "error";

const ERROR_MSG = {
  zh: "提交失败，请稍后再试。",
  en: "Submission failed. Please try again later.",
} as const;

export function CTA() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { locale } = useLanguage();
  const t = translations.cta;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setErrorMsg("");

    const form = formRef.current!;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      contact: formData.get("contact") as string,
      platform: formData.get("platform") as string,
      notes: formData.get("notes") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setState("success");
      } else {
        setState("error");
        setErrorMsg(result.error ?? ERROR_MSG[locale]);
      }
    } catch {
      setState("error");
      setErrorMsg(ERROR_MSG[locale]);
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all backdrop-blur-sm";

  return (
    <section id="contact" className="py-20">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.title[locale]}
        </h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10">
          {t.description[locale]}
        </p>

        {state === "success" ? (
          <div className="p-10 rounded-2xl glass-card shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-success)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.success.title[locale]}
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              {t.success.message[locale]}
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl glass-card shadow-lg text-left space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                  {t.form.name[locale]} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClass}
                  placeholder={t.form.namePlaceholder[locale]}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                  {t.form.company[locale]}
                </label>
                <input
                  type="text"
                  name="company"
                  className={inputClass}
                  placeholder={t.form.companyPlaceholder[locale]}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                  {t.form.email[locale]} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder={t.form.emailPlaceholder[locale]}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                  {t.form.contact[locale]}
                </label>
                <input
                  type="text"
                  name="contact"
                  className={inputClass}
                  placeholder={t.form.contactPlaceholder[locale]}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                {t.form.platform[locale]}
              </label>
              <select name="platform" className={inputClass}>
                <option value="">{t.form.platformPlaceholder[locale]}</option>
                <option value="shopify">Shopify</option>
                <option value="woocommerce">WooCommerce</option>
                <option value="magento">Magento</option>
                <option value="custom">{t.form.platformOptions.custom[locale]}</option>
                <option value="other">{t.form.platformOptions.other[locale]}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-text)]">
                {t.form.notes[locale]}
              </label>
              <textarea
                name="notes"
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder={t.form.notesPlaceholder[locale]}
              />
            </div>

            {state === "error" && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-[var(--color-accent)]/25 text-base hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {state === "submitting"
                ? locale === "zh"
                  ? "提交中..."
                  : "Submitting..."
                : t.form.submit[locale]}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
