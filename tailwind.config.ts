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
      fontFamily: { sans: ["var(--font-roboto)", "sans-serif"] },
      colors: {
        "light-background": "#FFFFFF",
        "dark-background": "#000000",
        "light-app-name-text": "#FFFFFF",
        "dark-app-name-text": "#000000",
        "light-coming-soon-text": "#ccc",
        "dark-coming-soon-text": "#444",
        "light-copytight-text": "#444",
        "dark-copytight-text": "#ccc",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
