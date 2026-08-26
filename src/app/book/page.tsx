import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { BookingForm } from "@/components/sections/booking-form";
import { getServiceBySlug, SERVICE_SLUGS } from "@/lib/services";

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
  const serviceDetail = validService ? getServiceBySlug(validService) : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gold-soft/40 via-white to-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 sm:pt-40">
        {/* Hero */}
        <div className="mx-auto mb-10 w-full max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9B7B0E]">
            <span className="size-1.5 rounded-full bg-gold" />
            Book a Cleaning
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl font-heading text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            {serviceDetail ? (
              <>
                Book{" "}
                <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
                  {serviceDetail.name}
                </span>
              </>
            ) : (
              <>
                Let&apos;s get your space{" "}
                <span className="bg-gradient-to-r from-[#C62828] to-[#6A1B9A] bg-clip-text text-transparent">
                  looking its best
                </span>
              </>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Four quick steps — pick your service, tell us about your space, choose a
            date, and we&apos;ll take care of the rest. No obligation, free quote.
          </p>
        </div>

        <BookingForm preselectedService={validService} />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
