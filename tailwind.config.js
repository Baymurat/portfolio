/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { "max": "639px"},
      short: { "raw": "(max-height: 667px)" },
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
