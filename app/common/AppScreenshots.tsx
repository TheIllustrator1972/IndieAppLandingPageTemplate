"use client";
import { useEffect, useState } from "react";

const AppScreenshots = () => {
  const allScreenshots = [
    "/AppScreenshots/1.png",
    "/AppScreenshots/2.png",
    "/AppScreenshots/3.png",
    "/AppScreenshots/4.png",
  ];

  const [currentScreenSize, setCurrentScreenSize] = useState("base");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCurrentScreenSize("lg");
      } else if (width >= 768) {
        setCurrentScreenSize("md");
      } else if (width >= 640) {
        setCurrentScreenSize("sm");
      } else {
        setCurrentScreenSize("base");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScreenshotsToDisplay = () => {
    switch (currentScreenSize) {
      case "lg":
        return allScreenshots.slice(0, 4);
      case "md":
        return allScreenshots.slice(0, 3);
      case "sm":
      case "base":
      default:
        return allScreenshots.slice(0, 1);
    }
  };

  const screenshotsToRender = getScreenshotsToDisplay();
  return (
    <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-6">
        {screenshotsToRender.map((src, index) => (
          <div key={index} className="relative overflow-visible rounded-lg">
            <img
              src={src}
              alt={`App Screenshot ${index + 1}`}
              className="max-h-[45vh] w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;
