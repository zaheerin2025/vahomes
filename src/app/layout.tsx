import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VA Home Cleaners | Professional Home & Commercial Cleaning",
  description:
    "Professional residential and commercial cleaning services, including deep cleaning, recurring maintenance, Airbnb cleaning, post-construction cleaning, and more. Book your cleaning today.",
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
  ],
  authors: [{ name: "VA Home Cleaners" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "VA Home Cleaners | Professional Home & Commercial Cleaning",
    description:
      "Professional residential and commercial cleaning services designed to keep your spaces fresh, clean, and comfortable.",
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
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
