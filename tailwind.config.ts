import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#111827",
          accent: "#7c3aed",
          soft: "#f3e8ff"
        }
      }
    }
  },
  plugins: []
};

export default config;
