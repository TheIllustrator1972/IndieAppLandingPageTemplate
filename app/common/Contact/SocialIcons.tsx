import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconClass =
  "text-2xl cursor-pointer transition-transform duration-200 hover:scale-110";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-row gap-2">
        <FontAwesomeIcon icon={faEnvelope} className={iconClass} />
        <FontAwesomeIcon icon={faXTwitter} className={iconClass} />
        <FontAwesomeIcon icon={faLinkedin} className={iconClass} />
      </div>
    </div>
  );
};

export default SocialIcons;
