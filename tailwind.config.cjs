/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dark: "linear-gradient(0deg, rgba(180,204,239,1) 100%, rgba(10,25,47,1) 100%)",
        light:
          "radial-gradient(circle, rgba(180,204,239,1) 0%, rgba(10,25,47,1) 0%)",
      },
      screens: {
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
