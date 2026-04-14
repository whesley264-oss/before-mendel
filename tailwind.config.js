/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdfcfb',
          100: '#f5f1ed',
          200: '#e3d5ca',
          300: '#d5bdaf',
          400: '#a38b7a',
          500: '#8b5e34',
          600: '#6f4e37',
          700: '#5d4037',
          800: '#3e2723',
          900: '#1a1412',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
