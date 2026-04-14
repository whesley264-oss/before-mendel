import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        parchment: {
          50: "#fdfcf7",
          100: "#f9f6e9",
          200: "#f1ead0",
          300: "#e4d6ab",
          400: "#d3ba7e",
          500: "#c4a05b",
          600: "#b28546",
          700: "#946a3b",
          800: "#7a5735",
          900: "#66492f",
          950: "#3a2818",
        },
        ink: {
          50: "#f5f5f5",
          100: "#e9e9e9",
          200: "#d2d2d2",
          300: "#acacac",
          400: "#7c7c7c",
          500: "#5d5d5d",
          600: "#494949",
          700: "#3d3d3d",
          800: "#343434",
          900: "#2d2d2d",
          950: "#1a1a1a",
        },
        accent: "#c4a05b", // Golden/Bronze accent
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
