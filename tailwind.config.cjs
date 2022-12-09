/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Work_Sans", "sans-serif"],
      },
      colors: {
        "title-color": "#1B2430",
        "subtitle-color": "#9BA4B4",
        "primary-color": "#FEA82F",
        "secondary-color": "#F6F6F6",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3.1875rem",
        "2xl": "11.1875rem",
      },
    },
  },
  plugins: [],
};
