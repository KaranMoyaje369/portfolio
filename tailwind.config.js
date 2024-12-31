/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      backgroundImage: {
        mainHeader: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        btnColor: "linear-gradient(to right, #434343 0%, black 100%)",
        btnHover:
          "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)",
        headerColor: "linear-gradient(to right, #434343 0%, black 100%)",
        heroColor: ")",
      },
      boxShadow: {
        primaryShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        secondaryShadow: "rgba(0, 0, 0, 0.65) 2.4px 2.4px 3.2px",
      },
    },
  },
  plugins: [],
};
