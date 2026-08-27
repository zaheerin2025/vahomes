import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { ServiceDetailPage } from "@/components/sections/service-detail";
import { SERVICE_DETAILS, getServiceBySlug, SERVICE_SLUGS } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) {
      return { title: "Service Not Found — VA Home Cleaners" };
    }
    return {
      title: `${service.name} — VA Home Cleaners`,
      description: service.summary,
      openGraph: {
        title: `${service.name} — VA Home Cleaners`,
        description: service.summary,
      },
    };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICE_DETAILS.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage service={service} related={related} />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
