import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { BookingForm } from "@/components/sections/booking-form";
import { BookHero } from "@/components/sections/book-hero";
import { SERVICE_SLUGS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book a Cleaning — VA Home Cleaners",
  description:
    "Book your cleaning service in 4 easy steps. Choose your service, tell us about your space, pick a date, and we'll handle the rest.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const validService = service && SERVICE_SLUGS.includes(service) ? service : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gold-soft/40 via-white to-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 sm:pt-40">
        <BookHero preselectedService={validService} />
        <BookingForm preselectedService={validService} />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
