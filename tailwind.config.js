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
          neutral: "#F2F2F2",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
};
