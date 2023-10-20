import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "characters": "characters",
      "houses": "houses",
      "chronology": "chronology",
      "Game of Thrones": "Game of Thrones"
    }
  },
  es: {
    translation: {
      "characters": "personajes",
      "houses": "casas",
      "chronology": "cronologia",
      "Game of Thrones": "Juego de Tronos"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en'
  });

export default i18n;