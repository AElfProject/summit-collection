import i18n from 'i18next';
import CN from '@public/i18n/zh-CN.json';
import EN from '@public/i18n/en.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: EN
  },
  'zh-CN': {
    translation: CN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
