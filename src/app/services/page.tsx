import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial painting services: interior, exterior, cabinets, trim, offices, retail, warehouses. MC Octopus Painting LLC.",
};

const residentialServices = [
  { name: "Interior", desc: "Wall painting, ceilings, accent walls" },
  { name: "Exterior", desc: "House siding, trim, decks" },
  { name: "Cabinets", desc: "Kitchen and bathroom cabinet refinishing" },
  { name: "Trim", desc: "Baseboards, doors, window frames" },
  { name: "Full home repaint", desc: "Complete interior and exterior refresh" },
];

const commercialServices = [
  { name: "Offices", desc: "Professional office spaces" },
  { name: "Retail", desc: "Storefronts and retail interiors" },
  { name: "Warehouses", desc: "Industrial and warehouse painting" },
  { name: "Property managers", desc: "Multi-property maintenance" },
  { name: "Multi-unit", desc: "Apartments and condos" },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-brand-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-lg text-blue-100">
            Professional painting for residential and commercial clients.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Residential Painting
              </h2>
              <p className="mt-4 text-gray-600">
                From single rooms to full home repaints, we deliver quality
                results.
              </p>
              <ul className="mt-6 space-y-4">
                {residentialServices.map((s) => (
                  <li key={s.name} className="border-l-4 border-brand-red pl-4">
                    <h3 className="font-semibold text-gray-900">{s.name}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?type=residential"
                className="mt-8 inline-block rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Commercial Painting
              </h2>
              <p className="mt-4 text-gray-600">
                Keep your business looking professional with reliable commercial
                painting.
              </p>
              <ul className="mt-6 space-y-4">
                {commercialServices.map((s) => (
                  <li key={s.name} className="border-l-4 border-brand-red pl-4">
                    <h3 className="font-semibold text-gray-900">{s.name}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?type=commercial"
                className="mt-8 inline-block rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
