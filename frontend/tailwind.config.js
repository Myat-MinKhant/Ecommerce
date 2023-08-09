/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px", /*640*/
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        main: "#212121",
        second: "#E4E4E4",
        third: "#9e9e9e",
        dark: "#000",
        black: "#1d1d1f",
        body: "#bbbbbb",
      },
      minHeight: {
        not_found: "80vh",
      },
      height: {
        cart: "87.5vh",
      },
      fontFamily: {
        main: "League Spartan",
      },
    },
  },
  plugins: [],
};
