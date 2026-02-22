import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";
import { brand } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.businessName} | Professional Interior & Exterior Painting`,
    template: `%s | ${brand.businessName}`,
  },
  description: `Licensed & insured residential and commercial painting in ${brand.city}. Interior, exterior, cabinets, trim. Request a free estimate. Call ${brand.phone}.`,
  keywords: [
    "painting contractor",
    "residential painting",
    "commercial painting",
    "interior painting",
    "exterior painting",
    `${brand.city} painting`,
    "house painting",
  ],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--brand-red:${brand.primaryColor};--brand-red-dark:${brand.primaryColorDark};}`,
          }}
        />
      </head>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
