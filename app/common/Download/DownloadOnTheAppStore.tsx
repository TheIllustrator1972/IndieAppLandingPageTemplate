import { appData } from "../constants";
import DownloadBlack from "./DownloadBlack";
import DownloadWhite from "./DownloadWhite";

const DownloadOnTheAppStore = () => {
  return (
    <div className="pt-4">
      <a href={appData.appStoreLink} target="_blank" rel="noopener noreferrer">
        <DownloadBlack className="block cursor-pointer transition-transform duration-300 hover:scale-105 dark:hidden" />
        <DownloadWhite className="hidden cursor-pointer transition-transform duration-300 hover:scale-105 dark:block" />
      </a>
    </div>
  );
};

export default DownloadOnTheAppStore;
