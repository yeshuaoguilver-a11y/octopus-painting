import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MC Octopus Painting | Professional Interior & Exterior Painting",
    template: "%s | MC Octopus Painting",
  },
  description:
    "Licensed & insured residential and commercial painting in Washington. Interior, exterior, cabinets, trim. Request a free estimate. Call 425-919-7837.",
  keywords: [
    "painting contractor",
    "residential painting",
    "commercial painting",
    "interior painting",
    "exterior painting",
    "Washington painting",
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
