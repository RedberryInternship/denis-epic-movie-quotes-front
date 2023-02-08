export const useLanguageValidator = (language: 'Eng' | 'ქარ') => {
  return {
    pattern: {
      value: new RegExp(
        `^[${language === 'ქარ' ? 'ა-ჰ' : 'a-zA-Z'}\\s\\p{P}\\p{N}\\p{S}]+$`,
        'u'
      ),
      message: `This field should be written in ${
        language === 'ქარ' ? 'Georgian' : 'English'
      }`,
    },
  };
};
