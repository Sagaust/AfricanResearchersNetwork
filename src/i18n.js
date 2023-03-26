import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "./locales/en/translation.json";
import afTranslation from "./locales/af/translation.json";
import arTranslation from "./locales/ar/translation.json";
import haTranslation from "./locales/ha/translation.json";
import igTranslation from "./locales/ig/translation.json";
import piTranslation from "./locales/pi/translation.json";
import shTranslation from "./locales/sh/translation.json";
import soTranslation from "./locales/so/translation.json";
import swTranslation from "./locales/sw/translation.json";
import xhTranslation from "./locales/xh/translation.json";
import yoTranslation from "./locales/yo/translation.json";
import zuTranslation from "./locales/zu/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      af: { translation: afTranslation },
      ar: { translation: arTranslation }, 
      ha: { translation: haTranslation },
      ig: { translation: igTranslation },
      pi: { translation: piTranslation },
      sh: { translation: shTranslation },
      so: { translation: soTranslation },
      sw: { translation: swTranslation },
      xh: { translation: xhTranslation },
      yo: { translation: yoTranslation },
      zu: { translation:zuTranslation }
    },
    lng: 'en', // set the default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
