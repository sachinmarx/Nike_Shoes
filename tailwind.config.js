/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        Pic_Back: "url('public/Back_Shoe.svg')",
        Pic_Small: "url('public/Back_Small.svg')",
      },
      fontFamily: {
        display: ["Palanquin", "Montserrat", "sans-serif"],
      },
      textColor: {
        color: "#73797f",
      },
    },
  },
  plugins: [],
};
