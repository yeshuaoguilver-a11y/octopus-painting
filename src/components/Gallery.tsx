export default function Gallery() {
  const placeholderCount = 6;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Before & After Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            See the quality of our work. Gallery optimized for future image
            uploads.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg bg-gray-200 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-sm">Placeholder {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
