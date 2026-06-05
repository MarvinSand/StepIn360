import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070d",
          900: "#05070d",
          800: "#0a0e18",
          700: "#111827",
          600: "#1e293b",
        },
        cyan: {
          bright: "#00f2fe",
          sky: "#4facfe",
        },
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "cyan-grad": "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
      },
      boxShadow: {
        glow: "0 0 50px rgba(0, 242, 254, 0.12)",
        "glow-lg": "0 30px 80px -20px rgba(0, 242, 254, 0.25)",
        card: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
