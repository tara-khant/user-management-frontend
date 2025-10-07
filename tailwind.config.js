/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // scan all JS/TS/React files in src
  ],
  theme: {
    extend: {}, // you can extend default Tailwind theme here
  },
  plugins: [], // you can add Tailwind plugins here
};

module.exports = config;
