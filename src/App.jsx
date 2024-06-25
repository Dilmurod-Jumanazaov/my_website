import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "./language/language";

function App() {
  i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: localStorage.getItem("language"),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: lang.eng,
      },
      ru: {
        translation: lang.rus,
      },
      uz: {
        translation: lang.uz,
      }
    },
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
