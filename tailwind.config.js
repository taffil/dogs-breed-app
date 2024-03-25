/** @type {import('tailwindcss').Config} */
export default {
  // mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: { min: "640px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1439px) { ... }

      xl: { min: "1440px" },
      // => @media (min-width: 1440px and max-width: 1919px) { ... }

      "2xl": { min: "2560px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        gray: {
          900: "#202225",
          850: "#2F3136",
          800: "#2F3136",
          700: "#36393F",
          650: "#3A3E44",
          600: "#4F545C",
          500: "#72767D",
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
