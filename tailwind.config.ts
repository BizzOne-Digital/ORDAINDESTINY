import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#061B2B", 800: "#0A2438", 700: "#0F2F48", 950: "#03111C" },
        ivory: { DEFAULT: "#F8F4EB", 50: "#FCFAF5", 200: "#EFE7D6" },
        gold: { DEFAULT: "#C6A052", light: "#E2C886", dark: "#9C7A33" },
        burgundy: { DEFAULT: "#790D20", dark: "#4E0814", light: "#9A1A30" },
        ink: "#1F2A33",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.28em" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(.2,.7,.2,1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
