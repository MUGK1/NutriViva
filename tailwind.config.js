/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryLightGreen: "#ECF4D6",
        primaryGreen: "#9AD0C2",
        secondaryGreen: "#2D9596",
        primaryBlue: "#265073",
        primaryGray: "#D9D9D9",
      },
      width: {
        rem26: "26rem",
        rem30: "30rem",
        rem35: "35rem",
        rem40: "40rem",
        rem45: "45rem",
        rem50: "50rem",
        rem55: "55rem",
        rem60: "60rem",
        rem65: "65rem",
        rem70: "70rem",
        rem75: "75rem",
        rem80: "80rem",
        rem85: "85rem",
      },
      height: {
        rem60: "60rem",
        rem80: "80rem",
        rem100: "100rem",
        rem140: "140rem",
        rem160: "160rem",
        rem180: "180rem",
        rem200: "200rem",
      },
    },
  },
  plugins: [],
};
