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
        navy: {
          50: "#f0f3f9",
          100: "#d9e0f0",
          200: "#b3c1e0",
          300: "#8da2d1",
          400: "#6683c1",
          500: "#4064b2",
          600: "#33508e",
          700: "#263c6b",
          800: "#1a2847",
          900: "#0d1424",
          950: "#060a12",
        },
        royal: {
          50: "#eef3ff",
          100: "#dfe8ff",
          200: "#c6d4ff",
          300: "#a3b8ff",
          400: "#7e94ff",
          500: "#5a6eff",
          600: "#3738f5",
          700: "#2b28d8",
          800: "#2423ae",
          900: "#232489",
          950: "#161350",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d0",
          200: "#f4de9d",
          300: "#edc96a",
          400: "#e7b53f",
          500: "#dfa022",
          600: "#c57a18",
          700: "#a35616",
          800: "#864419",
          900: "#6f3818",
          950: "#401b0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0d1424 0%, #1a2847 50%, #263c6b 100%)",
        "hero-gradient-light": "linear-gradient(135deg, #f0f3f9 0%, #ffffff 50%, #f8fafc 100%)",
        "gold-gradient": "linear-gradient(135deg, #dfa022 0%, #e7b53f 50%, #f4de9d 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        "premium": "0 20px 60px -15px rgba(0, 0, 0, 0.15)",
        "premium-dark": "0 20px 60px -15px rgba(0, 0, 0, 0.4)",
        "gold-glow": "0 0 40px rgba(223, 160, 34, 0.3)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
