"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconClass =
  "text-lg sm:text-xl md:text-2xl cursor-pointer transition-transform duration-200 hover:scale-110 text-dark-app-name-text dark:text-light-app-name-text";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-row gap-2">
        <FontAwesomeIcon
          icon={faEnvelope}
          className={iconClass}
          onClick={() => console.log("Email Clicked")}
        />
        <FontAwesomeIcon icon={faXTwitter} className={iconClass} />
        <FontAwesomeIcon icon={faLinkedin} className={iconClass} />
      </div>
    </div>
  );
};

export default SocialIcons;
