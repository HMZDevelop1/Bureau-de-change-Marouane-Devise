import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          ocean: "#233D4D",
          orange: "#FE7F2D",
          gold: "#FCCA46",
          ivory: "#FEF6E4",
          cream: "#F8F4EA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #233D4D 0%, #1a2d3a 100%)",
        "orange-gradient":
          "linear-gradient(135deg, #FE7F2D 0%, #e67324 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #FCCA46 0%, #f0b830 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #FEF6E4 0%, #FFFFFF 50%, #F8F4EA 100%)",
        "hero-gradient-dark":
          "linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)",
      },
      boxShadow: {
        brand: "0 4px 20px rgba(35, 61, 77, 0.08)",
        "brand-hover": "0 8px 30px rgba(35, 61, 77, 0.12)",
        "brand-lg": "0 20px 60px rgba(35, 61, 77, 0.15)",
        orange: "0 4px 20px rgba(254, 127, 45, 0.25)",
        gold: "0 4px 20px rgba(252, 204, 70, 0.3)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        brand: "16px",
        "brand-sm": "12px",
        "brand-lg": "20px",
        "brand-xl": "24px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
