"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("p_theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.add(localTheme);
    } else {
      localStorage.setItem("p_theme", theme);
      document.documentElement.classList.add(theme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("p_theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("p_theme", "dark");
      setTheme("dark");
    }
  };

  return { theme, toggleTheme };
};
