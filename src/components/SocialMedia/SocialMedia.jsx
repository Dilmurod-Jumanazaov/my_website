import { Link } from "react-router-dom";
import PhoneIcon from "../../assets/phoneicon.svg";
import InstagramIcon from "../../assets/instagramicon.svg";
import TelegramIcon from "../../assets/telegramicon.svg";
import LinkedinIcon from "../../assets/linkedinicon.svg";
import GitHubIcon from "../../assets/githubicon.svg";
import { useTranslation } from "react-i18next";

export const SocialMedia = () => {

  const [t] = useTranslation();

  return (
    <>
      <div>
        <h3 className="mb-3 font-semibold text-2xl text-white text-center">{t("main.contact_me")}</h3>
        <ul className="list-unstyled flex items-center justify-center gap-7 mb-10">
          <li className="logo-link">
            <Link
              to={"https://www.linkedin.com/in/dilmurod-jumanazarov-7a49752b7/"}
              target="blank"
            >
              <img
                src={LinkedinIcon}
                width={40}
                height={40}
                alt="Linkedin profile icon"
              />
            </Link>
          </li>
          <li className="logo-link">
            <Link to={"https://github.com/Dilmurod-Jumanazaov"} target="blank">
              <img
                src={GitHubIcon}
                width={40}
                height={40}
                alt="GitHub profile icon"
              />
            </Link>
          </li>
          <li className="logo-link">
            <Link to={"https://t.me/DilmurodJumanazarov"} target="blank">
              <img
                src={TelegramIcon}
                width={40}
                height={40}
                alt="Telegram profile icon"
              />
            </Link>
          </li>
          <li className="logo-link">
            <Link to={"https://www.instagram.com/dilmurod__web"} target="blank">
              <img
                src={InstagramIcon}
                width={40}
                height={40}
                alt="Instagram profile icon"
              />
            </Link>
          </li>
          <li className="logo-link">
            <Link to={"tel:+998886510727"} target="blank">
              <img
                src={PhoneIcon}
                width={40}
                height={40}
                alt="My phone number"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
