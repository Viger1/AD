import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustLogos } from "@/components/TrustLogos";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <PaymentMethods />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
