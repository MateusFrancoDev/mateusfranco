/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // importante para toggle manual
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}", // se tiver páginas antigas
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        azul: {
          200: "#004AAD",
          300: "#043C86",
          400: "#669EE9",
          700: "#C0DBFF",
          800: "#042D64",
          900: "#032552",
          950: "#021836",
        },
      },
    },
  },

  plugins: [],
};
