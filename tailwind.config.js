/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#36D399",
          secondary: "#f6d860",
          accent: "#2B1A14",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
};
