/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        defaultBlack: "var(--color-defaultBlack)",
        "gray-01": "var(--color-gray-01)",
        "gray-02": "var(--color-gray-02)",
        "gray-03": "var(--color-gray-03)",
        "gray-05": "var(--color-gray-05)",
        "gray-06": "var(--color-gray-06)",
        "special-bg": "var(--color-special-bg)",
        "special-bg2": "var(--color-special-bg2)",
        "special-bg3": "var(--color-special-bg3)",
        "special-mainBg": "var(--color-special-mainBg)",
        "special-green": "var(--color-special-green)",
        "special-red": "var(--color-special-red)",
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
