import DownloadBlack from "./DownloadBlack";
import DownloadWhite from "./DownloadWhite";

const DownloadOnTheAppStore = () => {
  return (
    <div className="pt-4">
      <DownloadBlack className="block cursor-pointer transition-transform duration-300 hover:scale-105 dark:hidden" />
      <DownloadWhite className="hidden cursor-pointer transition-transform duration-300 hover:scale-105 dark:block" />
    </div>
  );
};

export default DownloadOnTheAppStore;
