import SocialIcons from "./Contact/SocialIcons";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="flex w-[90%] flex-col justify-between md:w-[70%] md:flex-row md:items-center lg:w-[60%]">
      <h2 className="text-3xl font-bold tracking-wide text-black dark:text-gray-100">
        App Name
      </h2>
      <div className="flex items-center gap-4">
        <ThemeButton />
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;
