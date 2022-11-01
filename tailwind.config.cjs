/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#efeee5",
        tiber: "#274546",
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
    },
  },
  plugins: [],
};
