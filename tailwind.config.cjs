/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: {
          100: "#fcfcfa",
          200: "#f9f8f5",
          300: "#f5f5ef",
          400: "#f2f1ea",
          500: "#efeee5",
          600: "#bfbeb7",
          700: "#8f8f89",
          800: "#605f5c",
          900: "#30302e",
        },
        tiber: {
          100: "#d4dada",
          200: "#a9b5b5",
          300: "#7d8f90",
          400: "#526a6b",
          500: "#274546",
          600: "#1f3738",
          700: "#17292a",
          800: "#101c1c",
          900: "#080e0e",
        },
      },
      cursor: {
        gamePointer: `url(/cursor.svg) 50 50, pointer`,
      },
      keyframes: {
        rotate: {
          "0%": { transform: "translate(-50%, -50%)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 5s linear infinite",
      },
      boxShadow: {
        game: "inset 0px -200px 57px -49px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
