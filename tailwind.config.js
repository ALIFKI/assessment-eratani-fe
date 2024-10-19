/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "sm-1": "23px",
      },
      colors: {
        secondary: "#0E9749",
        primary: "#FFCD00",
      },
    },
  },
  plugins: [],
};
