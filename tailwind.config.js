/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#ffd8b1",
        "primary-300": "#db4f3e",
        "primary-500": "#d73b29",
        "secondary-100": "#2b353e",
        "secondary-300": "#222a32",
        "secondary-500": "#1a2025",
        "gray-50": "#cccccc",
        lightCream: "#f3efd4",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      // screens: {
      //   xs: "480px",
      //   sm: "768px",
      //   md: "1060px",
      // },
    },
  },
  plugins: [],
};
