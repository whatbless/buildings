/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0px 0px 30px 10px rgba(255, 255, 255, 0.5)",
      },
      colors: {
        "regal-blue": "#0066cb",
        "regal-red": "#dc1c2d",
        "pastel-grey": "rgb(232, 232, 232)",
      },
      height: {
        650: "650px",
      },
    },
  },
  plugins: [],
};
