"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale } from "./translations";

interface LanguageContextValue {
  readonly locale: Locale;
  readonly toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "zh",
  toggle: () => {},
});

export function LanguageProvider({ children }: { readonly children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  return (
    <LanguageContext value={{ locale, toggle }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
