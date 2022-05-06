import { useRouter } from 'next/router';
import { Translation } from 'types/Translation';

export const useTranslation = (translation: Translation) => {
  const { locale, defaultLocale } = useRouter();

  return translation[locale ?? defaultLocale ?? ''];
};
