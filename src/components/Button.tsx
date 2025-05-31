"use client";
export const Button = () => (
  <button
    onClick={() => {
      console.log("Toggling dark mode");
      document.documentElement.classList.toggle("dark");
    }}
    className="m-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
  >
    Toggle Dark Mode
  </button>
);
