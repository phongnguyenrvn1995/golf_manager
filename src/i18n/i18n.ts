import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import các file ngôn ngữ
import en from './locales/en.json';
import vi from './locales/vi.json';

i18n
  .use(initReactI18next) // Kết nối với React
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // React đã bảo vệ khỏi XSS
    },
  });

export default i18n;
