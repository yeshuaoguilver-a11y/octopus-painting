import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "MC Octopus Painting LLC - Licensed and insured residential and commercial painting. Professional crew, quality materials, reliable scheduling.",
};

const highlights = [
  "Licensed & Insured",
  "Residential & Commercial",
  "Professional Crew",
  "Quality Materials",
  "Reliable Scheduling",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-brand-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">About Us</h1>
          <p className="mt-4 text-lg text-blue-100">
            Professional interior and exterior painting you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">
              MC Octopus Painting LLC
            </h2>
            <p className="text-gray-600">
              We provide high-quality painting services for residential and
              commercial clients. Our team is licensed, insured, and committed to
              clean, professional work on every job.
            </p>
            <p className="text-gray-600">
              Whether you need interior painting, exterior repainting, cabinet
              refinishing, or commercial projects, we deliver results you can
              count on.
            </p>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              What We Offer
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
