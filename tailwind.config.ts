import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "volterra-teal": "#27ABAE",
        "volterra-deep-green": "#002D2D",
        "volterra-grey-10": "#E6E6E6",
        "volterra-soft": "#F7F8F9",
        pastel: {
          coral: "#FBC8BC",
          butter: "#FFEDB2",
          lavender: "#D3CDE6",
          sage: "#C3E4D5",
          sky: "#9FBBE2",
          peach: "#FFDEAC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        base: ["15px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
