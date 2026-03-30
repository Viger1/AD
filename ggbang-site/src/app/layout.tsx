import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "GGBANG - 跨境电商一站式支付解决方案 | Cross-Border Payment Gateway",
  description:
    "GGBANG provides an all-in-one payment solution for DTC brands and cross-border merchants. 200+ payment methods, 5-minute integration. 为独立站和跨境电商提供全球支付对接服务。",
  keywords: [
    "跨境电商支付",
    "独立站支付",
    "支付网关",
    "payment gateway",
    "cross-border payment",
    "Shopify payment",
    "GGBANG",
  ],
  openGraph: {
    title: "GGBANG - Cross-Border Payment Gateway",
    description:
      "All-in-one payment solution for DTC brands and cross-border e-commerce. 200+ methods, 5-min integration.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GGBANG",
              applicationCategory: "FinanceApplication",
              description:
                "All-in-one cross-border payment gateway for DTC brands and e-commerce merchants",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free to start, pay per transaction",
              },
              featureList: [
                "200+ global payment methods",
                "5-minute integration",
                "Real-time transaction monitoring",
                "Multi-currency auto settlement",
                "Fraud prevention system",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What payment methods does GGBANG support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GGBANG supports 200+ payment methods including Visa, Mastercard, PayPal, Stripe, Alipay, WeChat Pay and local payment channels across 50+ countries.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to integrate GGBANG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With GGBANG SDK and API, integration takes as little as 5 minutes. Supports one-click setup for Shopify, WooCommerce and other major platforms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are GGBANG's pricing and fees?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GGBANG uses transparent pricing starting at 2.9% + $0.30 per transaction, with no hidden fees. Volume discounts available.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
