import { brand } from "@/lib/brand";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.businessName,
  description:
    "Professional interior and exterior painting for residential and commercial clients. Licensed and insured.",
  telephone: brand.phone,
  email: brand.email,
  url: brand.siteUrl,
  priceRange: "$$",
  areaServed: {
    "@type": "Place",
    name: brand.city,
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
