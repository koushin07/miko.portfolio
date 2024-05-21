/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grayscale": "#94979c",
        primary: "#ECE3CE",
        secondary: "#739072",
        accent: "#4F6F52",
        neutral: "#3A4D39",
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        title: ["Dongle", "sans-serif"],
        yanone: ["Dongle", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
