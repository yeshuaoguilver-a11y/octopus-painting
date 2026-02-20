import Link from "next/link";

const PHONE = "425-919-7837";
const PHONE_LINK = "tel:4259197837";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Professional Interior & Exterior Painting Done Right
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
            Residential and Commercial Painting You Can Trust.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-md bg-brand-red px-8 py-4 text-center text-lg font-semibold text-white hover:bg-brand-red-dark transition-colors sm:w-auto"
            >
              Request Free Estimate
            </Link>
            <a
              href={PHONE_LINK}
              className="w-full rounded-md border-2 border-white bg-transparent px-8 py-4 text-center text-lg font-semibold text-white hover:bg-white hover:text-brand-blue transition-colors sm:w-auto"
            >
              Call {PHONE}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Residential & Commercial
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Clean & Professional Crew
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
