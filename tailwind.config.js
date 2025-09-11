/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
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
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease forwards",
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [],
};
