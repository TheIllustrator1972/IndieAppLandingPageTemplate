import Image from "next/image";
import ThemeToggle from "../components/ThemeSwitcher";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen h-screen w-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center font-sans border border-gray-200 dark:border-gray-800">
      <Header />
      <ThemeToggle />
    </div>
  );
}
