/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Barlow: ["Barlow", "sans-serif"],
      "Barlow+Condensed": ["Barlow Condensed", "sans-serif"],
      Bellefair: ["Bellefair", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
