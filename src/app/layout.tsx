import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VA Home Cleaners | Professional Home & Commercial Cleaning",
  description:
    "Professional residential and commercial cleaning services — deep cleaning, recurring maintenance, Airbnb, post-construction & more. Limpieza que transforma. Book your cleaning today.",
  keywords: [
    "home cleaning",
    "commercial cleaning",
    "deep cleaning",
    "recurring cleaning",
    "Airbnb cleaning",
    "post-construction cleaning",
    "office cleaning",
    "eco-friendly cleaning",
    "VA Home Cleaners",
    "limpieza que transforma",
    "limpieza profesional",
  ],
  authors: [{ name: "VA Home Cleaners" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "VA Home Cleaners | Professional Home & Commercial Cleaning",
    description:
      "Limpieza que transforma. Professional residential and commercial cleaning services designed to keep your spaces fresh, clean, and comfortable.",
    siteName: "VA Home Cleaners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Home Cleaners | Professional Home & Commercial Cleaning",
    description:
      "Professional residential and commercial cleaning services designed to keep your spaces fresh, clean, and comfortable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <I18nProvider>{children}</I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
