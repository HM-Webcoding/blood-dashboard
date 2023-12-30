/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: "'Poppins', sans-serif"
      },
      boxShadow: {
        "primaryShadow": "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
      }
    },
    colors: {
      primaryColor: "#A41214",
      secondColor: "#A0AEC0",
      headingColor: "#2D3748",
      menuIconColor: "#718096",
      boarderColor: "#E2E8F0",
      whiteColor: "#fff"
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

