/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/home-bg.jpg')",
      },
      colors: {
        purple: "#B202D1",
        "border-purple": "#B202D1",
        "dark-purple-30": "#481592",
        "dark-purple-20": "#5621A1",
        "dark-purple-10": "#713ABF",
      },
      fontFamily: {
        custom: ["AlienEncountersSolid", "sans-serif"],
      },
    },
  },
  plugins: [],
};
