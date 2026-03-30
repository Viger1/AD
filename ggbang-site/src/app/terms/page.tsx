import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";

export const metadata = {
  title: "Terms of Service | GGBANG",
  description: "GGBANG terms of service for payment gateway usage.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Last updated: March 30, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using GGBANG&apos;s payment services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you are using the Services on behalf of a business, you represent that you have authority to bind that business to these terms.</p>

          <h2>2. Description of Services</h2>
          <p>GGBANG provides payment processing infrastructure that enables merchants to accept online payments from their customers. Our Services include:</p>
          <ul>
            <li>Payment gateway and processing API</li>
            <li>Multi-currency transaction support</li>
            <li>Fraud prevention and risk management tools</li>
            <li>Transaction reporting and analytics dashboard</li>
            <li>Settlement and payout services</li>
          </ul>

          <h2>3. Merchant Obligations</h2>
          <p>As a merchant using GGBANG, you agree to:</p>
          <ul>
            <li>Provide accurate and complete business information during registration</li>
            <li>Comply with all applicable laws and regulations in your operating jurisdictions</li>
            <li>Not use the Services for illegal activities, money laundering, or terrorist financing</li>
            <li>Maintain adequate security measures to protect customer data</li>
            <li>Respond to chargebacks and disputes in a timely manner</li>
            <li>Not exceed the chargeback thresholds set by card networks</li>
          </ul>

          <h2>4. Prohibited Activities</h2>
          <p>You may not use GGBANG to process payments for:</p>
          <ul>
            <li>Illegal goods or services</li>
            <li>Counterfeit or unauthorized products</li>
            <li>Unlicensed financial services</li>
            <li>Activities that violate intellectual property rights</li>
            <li>Any activity prohibited by Visa, Mastercard, or other card network rules</li>
          </ul>

          <h2>5. Fees and Settlement</h2>
          <ul>
            <li>Transaction fees are charged as agreed in your merchant agreement</li>
            <li>Fees are deducted from settlement amounts before payout</li>
            <li>Standard settlement cycle is T+2 (two business days after transaction)</li>
            <li>GGBANG reserves the right to hold funds in cases of suspected fraud or excessive chargebacks</li>
          </ul>

          <h2>6. Chargebacks and Disputes</h2>
          <p>When a chargeback is filed against a transaction, the disputed amount plus a chargeback fee will be debited from your account. You are responsible for providing evidence to dispute chargebacks. If your chargeback rate exceeds card network thresholds, we may suspend or terminate your account.</p>

          <h2>7. Account Suspension and Termination</h2>
          <p>GGBANG may suspend or terminate your account if you:</p>
          <ul>
            <li>Violate these Terms of Service</li>
            <li>Exceed chargeback thresholds</li>
            <li>Engage in prohibited activities</li>
            <li>Fail to provide requested compliance documentation</li>
          </ul>
          <p>Either party may terminate the agreement with 30 days written notice. Upon termination, any outstanding settlement amounts will be paid out after a reasonable holding period.</p>

          <h2>8. Limitation of Liability</h2>
          <p>GGBANG&apos;s total liability for any claim arising from these Terms shall not exceed the total fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>

          <h2>9. Intellectual Property</h2>
          <p>All GGBANG trademarks, logos, APIs, documentation, and software are our intellectual property. You are granted a limited, non-exclusive license to use our APIs and SDKs solely for integrating the Services.</p>

          <h2>10. Modifications</h2>
          <p>We may modify these Terms at any time. Material changes will be communicated at least 30 days in advance. Continued use of the Services after changes take effect constitutes acceptance of the modified Terms.</p>

          <h2>11. Governing Law</h2>
          <p>These Terms are governed by the laws of the Hong Kong Special Administrative Region. Any disputes shall be resolved through arbitration in Hong Kong under the rules of the Hong Kong International Arbitration Centre (HKIAC).</p>

          <h2>12. Contact</h2>
          <p>For questions about these Terms: <strong>legal@ggbang.com</strong></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
