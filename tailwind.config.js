/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-semibold": ["Gilroy-SemiBold", "sans-serif"],
        konnect: ["Konnect", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
