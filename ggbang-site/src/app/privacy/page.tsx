import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";

export const metadata = {
  title: "Privacy Policy | GGBANG",
  description: "GGBANG privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          <h1
            className="text-3xl font-bold mb-2 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Last updated: March 30, 2026</p>

          <h2>1. Introduction</h2>
          <p>GGBANG (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy of our merchants, their customers, and visitors to our website. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you use our payment services and visit our website.</p>

          <h2>2. Information We Collect</h2>
          <h3>Merchant Information</h3>
          <ul>
            <li>Business registration details and company name</li>
            <li>Contact information (name, email, phone number)</li>
            <li>Bank account and settlement details</li>
            <li>Website URL and business description</li>
          </ul>
          <h3>Transaction Data</h3>
          <ul>
            <li>Payment amounts, currencies, and timestamps</li>
            <li>Payment method information (card brand, last 4 digits — we never store full card numbers)</li>
            <li>Transaction status and error codes</li>
            <li>IP address and device information for fraud prevention</li>
          </ul>
          <h3>Website Visitors</h3>
          <ul>
            <li>Contact form submissions (name, email, company, message)</li>
            <li>Usage analytics (pages visited, time on site)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Process and settle payment transactions</li>
            <li>Prevent fraud and comply with anti-money laundering regulations</li>
            <li>Provide customer support and technical assistance</li>
            <li>Send transaction notifications and account updates</li>
            <li>Improve our services and develop new features</li>
            <li>Comply with legal obligations and regulatory requirements</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li><strong>PCI DSS Level 1</strong> — the highest level of payment card industry security certification</li>
            <li><strong>AES-256 encryption</strong> for data at rest and TLS 1.3 for data in transit</li>
            <li><strong>Tokenization</strong> — sensitive card data is replaced with non-sensitive tokens</li>
            <li>Regular third-party security audits and penetration testing</li>
            <li>Access controls and employee security training</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal information. We share data only with:</p>
          <ul>
            <li><strong>Payment processors and acquiring banks</strong> — to process transactions</li>
            <li><strong>Fraud prevention partners</strong> — to detect and prevent fraudulent activity</li>
            <li><strong>Regulatory authorities</strong> — when required by law or legal process</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain transaction data for the period required by applicable financial regulations (typically 5-7 years). Merchant account data is retained for the duration of the business relationship plus the legally required retention period. You may request deletion of non-regulated data at any time.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data (subject to legal retention requirements)</li>
            <li>Object to or restrict certain data processing</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, contact us at <strong>privacy@ggbang.com</strong>.</p>

          <h2>8. Cookies</h2>
          <p>Our website uses essential cookies for functionality (session management, security). We do not use advertising or tracking cookies.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Material changes will be notified via email to registered merchants or by posting a notice on our website.</p>

          <h2>10. Contact</h2>
          <p>For privacy-related inquiries: <strong>privacy@ggbang.com</strong></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
