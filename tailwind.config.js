/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4CB299",
          50: "#CCE9E2",
          100: "#BEE3DA",
          200: "#A1D7CA",
          300: "#85CBBA",
          400: "#68BFA9",
          500: "#4CB299",
          600: "#3B8B77",
          700: "#2A6355",
          800: "#1A3C34",
          900: "#2e2f41",
          950: "#2b2d40",
        },
      },
        boxShadow: {
        'bottom-nav': '0 -0.5px 2.5px #2728331f',
      }
    },
  },
  plugins: [],
};
