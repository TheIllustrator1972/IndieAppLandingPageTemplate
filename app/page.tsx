import Image from "next/image";
import ThemeButton from "./common/ThemeButton";
import Header from "./common/Header";

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center 
                    bg-light-background dark:bg-dark-background 
                    text-gray-900 dark:text-gray-100"
    >
      <Header />
    </div>
  );
}
