const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    "@tailwindcss/postcss": {},
    // tailwindcss: {}, // This plugin reads your tailwind.config.js
    // autoprefixer: {},
  },
};

export default config;
