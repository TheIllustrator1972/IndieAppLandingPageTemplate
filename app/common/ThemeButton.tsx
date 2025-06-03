"use client";
import { useTheme } from "@/Hooks/useTheme";
import { MoonStar, Sun } from "lucide-react";
import React from "react";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme} className="w-fit cursor-pointer">
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </div>
  );
};

export default ThemeButton;
