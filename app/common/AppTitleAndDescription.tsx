import { appData } from "./constants";
import DownloadOnTheAppStore from "./Download/DownloadOnTheAppStore";

const AppTitleAndDescription = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center sm:p-6 md:p-8 lg:p-10">
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-dark-app-name-text dark:text-light-app-name-text sm:text-5xl md:text-6xl">
        {appData.title}
      </h1>
      <p className="max-w-2xl text-lg font-medium leading-relaxed text-dark-app-name-text dark:text-light-app-name-text sm:text-xl md:text-2xl">
        {appData.description}
      </p>
      {appData?.isLaunched ? (
        <DownloadOnTheAppStore />
      ) : (
        <p className="text-dark-coming-soon-text dark:light-coming-soon-text pt-4 text-base font-semibold sm:text-lg md:text-xl">
          Coming soon on the App Store
        </p>
      )}
    </div>
  );
};

export default AppTitleAndDescription;
