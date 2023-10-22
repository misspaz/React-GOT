import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "characters": "characters",
      "houses": "houses",
      "chronology": "chronology",
      "Game of Thrones": "Game of Thrones",
      "alliances": "alliances",
      "foundation": "foundation",
      "region": "region",
      "religions": "religions",
      "settlement": "settlement",
      "house": "house",
      "apariences": "apariences",
      "father": "father",
      "descendants": "descendants",
      "titles": "titles",
      
    }
  },
  es: {
    translation: {
      "characters": "personajes",
      "houses": "casas",
      "chronology": "cronologia",
      "Game of Thrones": "Juego de Tronos",
      "alliances": "alianzas",
      "foundation": "Fecha de fundacion",
      "region": "region",
      "religions": "religiones",
      "settlement": "asentamiento",
      "house": "casa",
      "apariences": "apariencias",
      "father": "padre",
      "descendants": "descendientes",
      "titles": "titulos",
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