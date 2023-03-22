/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-001": "#727272",
        "gray-002": "#E6E6E6",
        "gray-003": "#F5F5F5",

        "black-001": "#222222",
      },
    },
  },
  plugins: [],
};
