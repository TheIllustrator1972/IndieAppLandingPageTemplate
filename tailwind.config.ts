import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "light-background": "#FFFFFF",
        "dark-background": "#000000",
        "light-app-name-text": "#FFFFFF",
        "dark-app-name-text": "#000000",
        "light-coming-soon-text": "#b2b2b2",
        "dark-coming-soon-text": "#374151",
        "light-copytight-text": "#b2b2b2",
        "dark-copytight-text": "#4b5563",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
