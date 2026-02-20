import Link from "next/link";

const residentialServices = [
  "Interior",
  "Exterior",
  "Cabinets",
  "Trim",
  "Full home repaint",
];

const commercialServices = [
  "Offices",
  "Retail",
  "Warehouses",
  "Property managers",
  "Multi-unit",
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Professional painting solutions for homes and businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Residential */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Residential Painting
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {residentialServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  {service}
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

          {/* Commercial */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Commercial Painting
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {commercialServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  {service}
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
  );
}
