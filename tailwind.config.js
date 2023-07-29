/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              "custom-grayscale": '#94979c'
            },
      fontFamily:{
        "title":  ['Dongle', 'sans-serif'],
        "yanone": ['Dongle','sans-serif'],
        "open-sans": ['Open Sans','sans-serif'],
        "montserrat": ['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
}

