/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "996px",
        xl: "1440px"
      },
      colors: {
        primaryColor: "#DEC2BA",
        secondaryColor: "#373334",
        backgroundDark: "#231F20",
        cardColor: "#F0EDEE"
      },
      width: {
        "128": "width: 30rem"
      }
    },
  },
  plugins: [],
}