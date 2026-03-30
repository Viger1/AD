import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GGBANG - AI Content Marketing & Distribution | AI 内容营销与多平台分发",
  description:
    "GGBANG helps brands get discovered by AI search engines and real users. Multi-platform content distribution, white-hat GEO optimization, and AI-powered content creation. 帮助品牌被 AI 搜索引擎和真实用户发现。",
  keywords: [
    "AI content marketing",
    "GEO optimization",
    "content distribution",
    "AI 内容营销",
    "多平台分发",
    "GEO 优化",
    "AI search optimization",
  ],
  openGraph: {
    title: "GGBANG - AI Content Marketing & Distribution",
    description:
      "Get your brand discovered by AI search engines and real users across platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
