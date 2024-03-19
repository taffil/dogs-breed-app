/** @type {import('tailwindcss').Config} */
export default {
  // mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: { main: "#FDDC53", light: "#FDDC5326" },
        gray: {
          main: "#414348",
          light: "#AAADB2",
          900: "#202225",
          800: "#2F3136",
          700: "#36393F",
          600: "#4F545C",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        black: { 900: "#000000", 800: "#151618", 700: "#22272F" },
        success: "#25C06D",
        error: "#FF5147",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
