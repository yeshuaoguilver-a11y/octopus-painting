import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#c41e3a",
          "red-dark": "#9e1830",
          blue: "#1e3a8a",
          "blue-dark": "#1e3a5f",
          white: "#ffffff",
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            800: "#1f2937",
            900: "#111827",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
