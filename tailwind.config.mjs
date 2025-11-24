/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0f766e",
          light: "#14b8a6",
          dark: "#0d9488"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
