import Header from "@/components/Header";
import landingPageData from "./../constants/landingPageData";

export default function Home() {
  return (
    <div className="min-h-screen h-screen w-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center font-sans border border-gray-200 dark:border-gray-800">
      <Header />
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        {landingPageData.appName}
      </div>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mt-4">
          This content beautifully adapts to your chosen theme, thanks to
          Tailwind CSS and `next-themes`.
        </p>
      </div>
    </div>
  );
}
