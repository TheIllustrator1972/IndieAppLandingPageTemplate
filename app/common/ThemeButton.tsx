"use client";
import { useTheme } from "@/Hooks/useTheme";
import { MoonStar, Sun } from "lucide-react";
import React from "react";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const iconColorClass =
    theme === "dark"
      ? "text-lg sm:text-xl md:text-2xl text-light-app-name-text"
      : "text-lg sm:text-xl md:text-2xl text-dark-app-name-text";

  return (
    <div onClick={toggleTheme} className="w-fit cursor-pointer">
      {theme === "dark" ? (
        <Sun className={iconColorClass} />
      ) : (
        <MoonStar className={iconColorClass} />
      )}
    </div>
  );
};

export default ThemeButton;
