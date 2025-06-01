import ThemeToggle from "./ThemeSwitcher";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-[90%] md:w-2/3 flex justify-between items-center  ">
      <p>App Name</p>
      <div className="bg-red-500 text-white p-4 m-8 text-3xl font-bold">
        Hello Tailwind!
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
        <div>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
