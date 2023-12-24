/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors: {
        darkwhite: "#f3f4f6",
        accent: "#0e374e",
      },
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
