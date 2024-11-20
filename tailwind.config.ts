import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_blue: "#02699A",
        secondary_blue: "#1F2D53",
      },
      fontFamily: {
        granville: ['granville', "sans-serif"],
        sans: ['tablet-gothic', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
