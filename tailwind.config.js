/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DEC2BA",
        secondaryColor: "#373334",
        backgroundDark: "#231F20"
      },
      width: {
        "128": "width: 30rem"
      }
    },
  },
  plugins: [],
}