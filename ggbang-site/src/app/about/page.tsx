import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";

export const metadata = {
  title: "About GGBANG | Company & Team",
  description:
    "GGBANG is a cross-border payment infrastructure company helping DTC brands and e-commerce merchants accept payments worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About GGBANG
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We build payment infrastructure that helps cross-border merchants accept payments from customers worldwide — simply, securely, and at scale.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <div className="p-8 rounded-2xl glass-card">
              <h2
                className="text-2xl font-bold mb-4 text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Mission
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Cross-border payments are broken. Merchants lose 30-40% of international orders to payment failures, face opaque fees, and spend weeks integrating fragmented local payment methods.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                GGBANG exists to fix this. We provide a unified payment API that connects merchants to 200+ payment methods across 50+ countries, with smart routing, real-time fraud prevention, and transparent pricing. Our goal is to make accepting payments as simple as sending an email — no matter where your customers are.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2
              className="text-2xl font-bold mb-8 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Transparency",
                  description:
                    "No hidden fees, no surprise charges. Every basis point is documented. Our merchants see exactly what they pay and why.",
                },
                {
                  title: "Security First",
                  description:
                    "PCI DSS Level 1 compliant. 3D Secure 2.0. Real-time fraud detection. We treat every transaction as if it were our own money.",
                },
                {
                  title: "Merchant Success",
                  description:
                    "Your payment success rate is our KPI. We optimize routing, reduce chargebacks, and maximize every dollar of revenue.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl glass-card"
                >
                  <h3
                    className="text-lg font-semibold mb-2 text-[var(--color-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2
              className="text-2xl font-bold mb-8 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Team
            </h2>
            <div className="p-8 rounded-2xl glass-card">
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                GGBANG was founded by a team of payment and fintech engineers with deep experience in cross-border commerce infrastructure. We have collectively processed billions of dollars in international transactions and built payment systems for some of the largest e-commerce platforms in Asia.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Our engineering-first approach means we build for reliability, scale, and developer experience. We believe the best payment platform is one that merchants never have to think about — it just works.
              </p>
            </div>
          </section>

          {/* Compliance & Licensing */}
          <section className="mb-16">
            <h2
              className="text-2xl font-bold mb-8 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Compliance & Security
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "PCI DSS Level 1",
                  description:
                    "The highest level of payment card industry security certification. All cardholder data is encrypted, tokenized, and stored in compliance with PCI standards.",
                },
                {
                  title: "3D Secure 2.0",
                  description:
                    "Strong Customer Authentication (SCA) compliant. Supports frictionless verification for low-risk transactions and challenge flows for high-risk ones.",
                },
                {
                  title: "AML / KYC",
                  description:
                    "All merchants undergo identity verification and ongoing monitoring in accordance with international anti-money laundering regulations.",
                },
                {
                  title: "Data Protection",
                  description:
                    "GDPR compliant. Payment data encrypted with AES-256. Regular third-party security audits and penetration testing.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl glass-card">
                  <h3
                    className="text-base font-semibold mb-2 text-[#612FFF]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-2xl font-bold mb-8 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h2>
            <div className="p-8 rounded-2xl glass-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3 text-[var(--color-text)]">Business Inquiries</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-1">sales@ggbang.com</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">For merchant onboarding, partnership, and custom solutions.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[var(--color-text)]">Technical Support</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-1">support@ggbang.com</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">For API integration help, technical issues, and developer questions.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
