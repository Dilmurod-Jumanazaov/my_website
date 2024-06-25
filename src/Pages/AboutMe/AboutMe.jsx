import "../AboutMe/about.css";
import DilmurodImage from "../../assets/meimage.jpg";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {

  const [t] = useTranslation();

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between pb-20">
            <div className="max-w-[650px] w-full">
              <h3 className="mb-10 font-semibold text-4xl tracking-widest text-teal-300">
                {t("main.about_me_page.about_title")}
              </h3>
              <ul className="details-box">
                <li className="p-1 pb-2 border-b-2 rounded-r-lg">
                  <details>
                    <summary className="biography-title mb-1 font-bold text-white text-xl cursor-pointer list-none">
                      {t("main.about_me_page.biography_title")}
                    </summary>
                    <p className="pl-11 text-white">
                      {t("main.about_me_page.biography")}
                    </p>
                  </details>
                </li>
                <li className="p-1 pb-2 border-b-2 rounded-r-lg">
                  <details>
                    <summary className="education-title mb-1 font-bold text-white text-xl cursor-pointer list-none">
                      {t("main.about_me_page.education_title")}
                    </summary>
                    <p className="pl-11 text-white">
                      {t("main.about_me_page.education")}
                    </p>
                  </details>
                </li>
                <li className="p-1 pb-2 border-b-2 rounded-r-lg">
                  <details>
                    <summary className="gym-title mb-1 font-bold text-white text-xl cursor-pointer list-none">
                      {t("main.about_me_page.sports_title")}
                    </summary>
                    <p className="pl-11 text-white">
                      {t("main.about_me_page.sports")}
                    </p>
                  </details>
                </li>
                <li className="p-1 pb-2 border-b-2 rounded-r-lg">
                  <details>
                    <summary className="interests-title mb-1 font-bold text-white text-xl cursor-pointer list-none">
                      {t("main.about_me_page.interests_title")}
                    </summary>
                    <p className="pl-11 text-white">
                      {t("main.about_me_page.interests")}
                    </p>
                  </details>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="border border-2 rounded-xl"
                src={DilmurodImage}
                width={520}
                height={500}
                alt="Dilmurod Jumanazarov"
              />
            </div>
          </div>
          <SocialMedia />
        </div>
      </section>
    </>
  );
};
