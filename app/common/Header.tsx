import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div
      className="w-[90%] md:w-[70%] lg:w-[60%]
    flex flex-col md:flex-row
    justify-between md:items-center"
    >
      <h2>App Name</h2>
      <ThemeButton />
    </div>
  );
};

export default Header;
