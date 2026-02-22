/**
 * Central brand config for the lead-gen factory.
 * All values come from env vars for multi-tenant deployments.
 * Defaults match MC Octopus Painting (seed client).
 */
function getEnv(key: string, fallback: string): string {
  if (typeof process === "undefined") return fallback;
  const val = process.env[key];
  return (val?.trim() || fallback) as string;
}

export const brand = {
  businessName: getEnv("NEXT_PUBLIC_BUSINESS_NAME", "MC Octopus Painting LLC"),
  businessNameShort: getEnv(
    "NEXT_PUBLIC_BUSINESS_NAME_SHORT",
    "MC OCTOPUS PAINTING"
  ),
  city: getEnv("NEXT_PUBLIC_CITY", "Washington"),
  phone: getEnv("NEXT_PUBLIC_PHONE", "425-919-7837"),
  email: getEnv("NEXT_PUBLIC_EMAIL", "mcoctopuspaintingllc@gmail.com"),
  primaryColor: getEnv("NEXT_PUBLIC_PRIMARY_COLOR", "#c41e3a"),
  primaryColorDark: getEnv("NEXT_PUBLIC_PRIMARY_COLOR_DARK", "#9e1830"),
  siteUrl: getEnv("NEXT_PUBLIC_SITE_URL", "https://mcoctopuspainting.com"),
} as const;

export function phoneLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}
