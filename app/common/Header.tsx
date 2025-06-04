import { appData } from "./constants";
import SocialIcons from "./Contact/SocialIcons";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="mt-4 flex w-[90%] flex-col justify-between gap-4 sm:mt-6 md:mt-10 md:w-[80%] md:flex-row md:items-center md:gap-4 lg:w-[70%]">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src="/AppLogo/AppLogo.png"
          className="h-6 w-6 object-cover sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          alt="App Logo"
        />
        <h2 className="text:dark-app-name-text text-xl font-medium tracking-wide dark:text-light-app-name-text sm:text-2xl md:text-3xl">
          {appData.name}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <SocialIcons />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
