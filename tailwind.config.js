/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#231F20",
        gray: "rgba(142, 142, 142, 1)",
        green: "rgba(39, 218, 84, 1)",
      },
    },
  },
  plugins: [],
};
