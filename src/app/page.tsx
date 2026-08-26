import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { FeaturedService } from "@/components/sections/featured-service";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurWork } from "@/components/sections/our-work";
import { BeforeAfter } from "@/components/sections/before-after";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <FeaturedService />
        <HowItWorks />
        <OurWork />
        <BeforeAfter />
        <WhyChooseUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
