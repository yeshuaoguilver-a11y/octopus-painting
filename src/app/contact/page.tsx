import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free estimate from MC Octopus Painting. Call 425-919-7837 or fill out the form.",
};

const PHONE = "425-919-7837";
const EMAIL = "mcoctopuspaintingllc@gmail.com";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-brand-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-lg text-blue-100">
            Request a free estimate or give us a call.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <EstimateForm />
    </div>
  );
}
