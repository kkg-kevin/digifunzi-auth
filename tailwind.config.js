/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0A1622",
          blue: "#31A8E0",
          blueDark: "#0E3651",
          orange: "#FFB545",
          peach: "#FFF2E1",
          mist: "#F3FAFF",
        },
      },
      boxShadow: {
        soft: "0 24px 45px rgba(18, 59, 87, 0.15)",
      },
    },
  },
  plugins: [],
};
