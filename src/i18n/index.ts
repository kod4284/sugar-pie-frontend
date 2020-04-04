import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/locale/en';
import ko from '@/i18n/locale/ko';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          ...en as object,
        },
      },
      ko: {
        translations: {
          ...ko as object,
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
