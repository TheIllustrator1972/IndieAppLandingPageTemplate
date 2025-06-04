"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { appData } from "../constants";

const iconClass =
  "text-lg sm:text-xl md:text-2xl cursor-pointer transition-transform duration-200 hover:scale-110 text-dark-app-name-text dark:text-light-app-name-text";

const SocialIcons = () => {
  const socialLinksData = [
    {
      id: "email",
      icon: faEnvelope,
      url: appData.socialLinks.email,
    },
    {
      id: "twitter",
      icon: faXTwitter,
      url: appData.socialLinks.twitter,
    },
    {
      id: "linkedin",
      icon: faLinkedin,
      url: appData.socialLinks.linkedin,
    },
    {
      id: "website",
      icon: faGlobe,
      url: appData.socialLinks.website,
    },
  ];
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-row gap-2">
        {socialLinksData.map((link) => (
          <a
            key={link?.id}
            href={link?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link?.icon} className={iconClass} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
