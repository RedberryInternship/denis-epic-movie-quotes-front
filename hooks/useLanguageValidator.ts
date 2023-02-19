import { useTranslation } from 'next-i18next';

export const useLanguageValidator = (language: 'Eng' | 'ქარ') => {
  const { t } = useTranslation('validation');

  return {
    pattern: {
      value: new RegExp(
        `^[${language === 'ქარ' ? 'ა-ჰ' : 'a-zA-Z'}\\s\\p{P}\\p{N}\\p{S}]+$`,
        'u'
      ),
      message: `${t('field_should_be_written')}${
        language === 'ქარ' ? t('in_georgian') : t('in_english')
      }`,
    },
  };
};
