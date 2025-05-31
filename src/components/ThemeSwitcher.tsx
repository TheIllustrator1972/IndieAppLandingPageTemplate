// components/ThemeToggle.tsx (or .jsx)
"use client"; // This is important for client-side functionality

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect runs only on the client, so we can safely use `useTheme` here
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoids rendering during SSR to prevent hydration errors
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
