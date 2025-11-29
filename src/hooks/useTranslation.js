import { useLanguage } from '../contexts/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as esTranslations } from '../translations/es';

const translationMap = {
  en: enTranslations,
  es: esTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();
  const t = translationMap[language] || enTranslations;

  return { t, language };
};

