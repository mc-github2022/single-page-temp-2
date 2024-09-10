/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: "#00D7D4",
      secondary: "#18A0FB",
      customGray: "#F5F5F5",
      light: "#ffffff",
      dark: "#2b2b2b",
      alert: "#af1818",
    },
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "812px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
