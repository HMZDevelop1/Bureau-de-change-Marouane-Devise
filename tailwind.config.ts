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
          coffee: "#1F150C",
          brown: "#412D15",
          beige: "#E1DCC9",
          white: "#FFFFFF",
        },
        surface: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          card: "var(--card-bg)",
          "card-hover": "var(--card-hover)",
        },
        foreground: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          heading: "var(--text-heading)",
          muted: "var(--text-muted)",
          link: "var(--text-link)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-cormorant)", "var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1F150C 0%, #0d0a06 100%)",
        "beige-gradient": "linear-gradient(135deg, #E1DCC9 0%, #d4cfb8 100%)",
        "dark-gradient": "linear-gradient(180deg, #000000 0%, #0d0a06 50%, #000000 100%)",
        "dark-card": "linear-gradient(135deg, rgba(31,21,12,0.4) 0%, rgba(31,21,12,0.2) 100%)",
        "coffee-gradient": "linear-gradient(135deg, #412D15 0%, #1F150C 100%)",
      },
      boxShadow: {
        brand: "0 4px 20px rgba(31, 21, 12, 0.08)",
        "brand-hover": "0 8px 30px rgba(31, 21, 12, 0.12)",
        "brand-lg": "0 20px 60px rgba(31, 21, 12, 0.15)",
        coffee: "0 4px 20px rgba(65, 45, 21, 0.25)",
        "coffee-lg": "0 8px 40px rgba(65, 45, 21, 0.35)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.08)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.12)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.2)",
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
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "pulse-soft": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.7" } },
        fadeInUp: { from: { opacity: "0", transform: "translateY(30px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        glow: { "0%": { boxShadow: "0 0 20px rgba(65, 45, 21, 0.15)" }, "100%": { boxShadow: "0 0 40px rgba(65, 45, 21, 0.25)" } },
      },
    },
  },
  plugins: [],
};
export default config;
