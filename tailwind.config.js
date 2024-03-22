/** @type {import('tailwindcss').Config} */
export default {
  // mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: { min: "640px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1440px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "2560px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gray: {
          900: "#202225",
          800: "#2F3136",
          700: "#36393F",
          600: "#4F545C",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
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
