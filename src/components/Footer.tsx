import Link from "next/link";
import { brand, phoneLink } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">{brand.businessName}</h3>
            <p className="mt-2 text-sm text-blue-100">
              Professional interior and exterior painting for residential and
              commercial clients.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm text-blue-100">
              <li>
                <a
                  href={phoneLink(brand.phone)}
                  className="hover:text-white transition-colors"
                >
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-700 pt-8 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} {brand.businessName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
