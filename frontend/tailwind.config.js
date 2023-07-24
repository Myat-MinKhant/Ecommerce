/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        main: "#212121",
        second: "#e0e0e0",
        third: "#9e9e9e",
        dark: "#000",
      },
      minHeight: {
        not_found: "80vh",
      },
      height: {
        cart: "87.5vh",
      },
    },
  },
  plugins: [],
};
