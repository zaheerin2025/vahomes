"use client";

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { BookingForm } from "@/components/sections/booking-form";
import { BookHero } from "@/components/sections/book-hero";
import { SERVICE_SLUGS } from "@/lib/services";

function BookContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const validService = service && SERVICE_SLUGS.includes(service) ? service : undefined;

  return (
    <>
      <BookHero preselectedService={validService} />
      <BookingForm preselectedService={validService} />
    </>
  );
}

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gold-soft/40 via-white to-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 sm:pt-40">
        <Suspense
          fallback={
            <div className="py-20 text-center font-heading text-lg font-semibold text-navy">
              Loading booking options...
            </div>
          }
        >
          <BookContent />
        </Suspense>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
