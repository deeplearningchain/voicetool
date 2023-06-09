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
        "p-btn": "url('/assets/p-btn.png')",
      },
      colors: {
        purple: "#B202D1",
      },
      fontFamily: {
        custom: ["AlienEncountersSolid", "sans-serif"],
      },
    },
  },
  plugins: [],
};
