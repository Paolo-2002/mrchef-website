import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C00",
        "primary-dark": "#D97700",
        black: "#1A1A1A",
        cream: "#FFF8F0",
        gold: "#C8A96E",
        "gray-light": "#F5F5F5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "Inter", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05" }],
        "section-title": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1" }],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
