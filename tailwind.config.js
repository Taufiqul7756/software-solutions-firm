/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NeutralD_Grey: "#4D4D4D",
        NeutralGrey: "#717171",
        NeutralSilver: "#F5F7FA",
        BrandPrimary: "#4CAF4F",
        Gray: "#18191F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
