/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This maps 'font-sans' to your Quicksand font variable
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};