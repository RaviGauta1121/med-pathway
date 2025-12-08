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
          primary: "#0066CC",
          secondary: "#00A86B",
          accent: "#FF6B6B",
          light: "#E8F4F8",
          dark: "#1A365D",
        },
        emergency: {
          critical: "#DC2626",
          warning: "#F59E0B",
          stable: "#10B981",
        },
      },
    },
  },
  plugins: [],
};

export default config;
