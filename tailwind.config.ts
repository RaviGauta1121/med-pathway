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
        medical: {
          primary: "#0066CC",      // Deep medical blue
          secondary: "#00A86B",    // Medical green
          accent: "#FF6B6B",       // Emergency red
          light: "#E8F4F8",        // Light blue background
          dark: "#1A365D",         // Dark blue
        },
        emergency: {
          critical: "#DC2626",
          warning: "#F59E0B",
          stable: "#10B981",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        medical: ["Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        medical: "0 4px 6px -1px rgba(0, 102, 204, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
