const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MC Octopus Painting LLC",
  description:
    "Professional interior and exterior painting for residential and commercial clients. Licensed and insured.",
  telephone: "425-919-7837",
  email: "mcoctopuspaintingllc@gmail.com",
  url: "https://mcoctopuspainting.com",
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Washington",
  },
  serviceType: [
    "Interior Painting",
    "Exterior Painting",
    "Residential Painting",
    "Commercial Painting",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
