"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type PropertyType = "residential" | "commercial";
type Timeline = "asap" | "1-3-months" | "planning";

interface FormData {
  name: string;
  phone: string;
  email: string;
  propertyType: PropertyType;
  projectType: string;
  timeline: Timeline;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  propertyType: "residential",
  projectType: "",
  timeline: "1-3-months",
  message: "",
};

export default function EstimateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "residential" || type === "commercial") {
      setFormData((prev) => ({ ...prev, propertyType: type }));
    }
  }, [searchParams]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Request Free Estimate
          </h2>
          <p className="mt-2 text-gray-600">
            Fill out the form and we&apos;ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {error && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="425-555-1234"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-gray-700"
              >
                Project Type
              </label>
              <input
                type="text"
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="e.g., Interior, Exterior, Cabinets, Full repaint"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-700"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              >
                <option value="asap">ASAP</option>
                <option value="1-3-months">1–3 months</option>
                <option value="planning">Planning ahead</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request Free Estimate"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
