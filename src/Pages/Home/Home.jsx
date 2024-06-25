import { ReactTyped } from "react-typed";
import "../Home/home.css";
import MeImage from "../../assets/me.jpg";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { useTranslation } from "react-i18next";

export const Home = () => {

  const [t] = useTranslation();
  console.log(t);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between pb-16">
            <div className="max-w-[750px]">
              <h2 className="mt-5 mb-5 font-semibold text-3xl text-white tracking-widest">
                {t("main.home_page.greeting")} 👋
              </h2>
              <h3 className="mb-16 font-semibold text-5xl text-white tracking-wide">
                {t("main.home_page.me")}
              </h3>
              <h3 className="mb-10 font-semibold text-4xl text-teal-300">
                <ReactTyped
                  strings={
                    [
                      `{ ${t("main.home_page.job")} }`
                    ]
                  }
                  typeSpeed={60}
                  backSpeed={60}
                  cursorChar="|"
                  loop
                  backDelay={3000}
                />
              </h3>
              <div>
                <h3 className="mb-6 text-3xl text-center font-semibold text-teal-500">
                  {t("main.home_page.briefly")}
                </h3>
                <p className="text-xl font-medium text-teal-200 tracking-wide leading-8">
                  {t("main.home_page.briefly_text")}
                </p>
              </div>
            </div>
            <div>
              <img
                className="border rounded-xl"
                src={MeImage}
                width={530}
                height={500}
                alt="Dilmurod Jumanazarov"
              />
            </div>
          </div>
          <SocialMedia/>
        </div>
      </section>
    </>
  );
};
