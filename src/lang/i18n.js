import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangFr from "./translations/fr.json";
import LangEn from "./translations/en.json";


const getStoredLanguage = () => {
  return localStorage.getItem("i18nLng") || "fr";
};

i18n.use(initReactI18next).init({
  resources: {
    en: LangEn,
    fr: LangFr
  },

  lng: getStoredLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng) => {
  
  i18n.changeLanguage(lng);
  localStorage.setItem("i18nLng", lng);
};

export default i18n;
