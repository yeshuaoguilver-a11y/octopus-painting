import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your request. We will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Thank You
        </h1>
        <p className="mt-4 text-gray-600">
          Your request has been received. We will contact you shortly to discuss
          your project.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Submit Another Request
          </Link>
        </div>
      </div>
    </div>
  );
}
