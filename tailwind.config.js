/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      lato: ['"Lato"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
