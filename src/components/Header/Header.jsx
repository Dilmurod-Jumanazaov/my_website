import { Link } from "react-router-dom";
import "../Header/header.css";
import PortfolioIcon from "../../assets/portfolioicon.svg";
import { useTranslation } from "react-i18next";

export const Header = () => {

  const [t,i18n] = useTranslation();

  return (
    <header className="fixed w-full top-0 p-6 bg-black bg-opacity-85">
      <div className="container">
        <div className="flex align-items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              to={"/"}
              className="font-bold text-4xl text-white hover:text-teal-500"
            >
              {t("header.logo")}
            </Link>
            <Link to={"/"}>
              <img
                src={PortfolioIcon}
                width={40}
                height={40}
                alt="portfolio icon"
              />
            </Link>
          </div>
          <nav className="flex items-center justify-between max-w-[880px] w-full">
            <ul className="flex items-center gap-14 list-unstyled">
              <li className="relative menu-item">
                <Link
                  to={"/"}
                  className="font-semibold font-sans -tracking-tighter text-xl text-white hover"
                >
                  {t("header.home")}
                </Link>
              </li>
              <li className="relative menu-item">
                <Link
                  to={"/about"}
                  className="font-semibold font-sans -tracking-tighter text-xl text-white hover"
                >
                  {t("header.about")}
                </Link>
              </li>
              <li className="relative menu-item">
                <Link
                  to={"/projects"}
                  className="font-semibold font-sans -tracking-tighter text-xl text-white hover"
                >
                  {t("header.project")}
                </Link>
              </li>
              <li>
                <Link to={"tel:+998886510727"} className="font-semibold text-white hover:text-teal-400 transition-colors">
                  +998 (88) 651-07-27
                </Link>
              </li>
            </ul>
            <select defaultValue={i18n.language} onChange={(evt) => {
              i18n.changeLanguage(evt.target.value);
              localStorage.setItem("language",evt.target.value);
            }}  className="max-w-[70px] w-full py-1 px-2 rounded-md border-transparent outline-none appearance-none text-center font-semibold" name="language">
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
              <option value="uz">UZ</option>
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
};
