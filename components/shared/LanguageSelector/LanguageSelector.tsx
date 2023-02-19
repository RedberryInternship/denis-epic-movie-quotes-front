import { ArrowDown, LanguageSelectorItem } from 'components';
import { useLanguageSelector } from './useLanguageSelector';

const LanguageSelector = () => {
  const { setLocale, t } = useLanguageSelector();

  return (
    <span className='group relative flex items-center ' tabIndex={0}>
      <span className='hidden lg:flex items-center gap-2.5 px-6 cursor-pointer'>
        <div className='w-[26px]'>{t('current_language_label')}</div>
        <span className='h-4 w-4 flex justify-center items-center pt-1'>
          <ArrowDown />
        </span>
      </span>
      <ul
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        className='bg-brand-modal invisible group-hover:visible group-focus-within:visible opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 scale-0 group-hover:scale-100 group-focus-within:scale-100
                absolute top-8 z-10 mt-2 w-36 sm:w-44 origin-top-left divide-y divide-black rounded-md shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none transition-all duration-500'
      >
        <LanguageSelectorItem
          label='English'
          value='en'
          setLocale={setLocale}
        />
        <LanguageSelectorItem
          label='ქართული'
          value='ka'
          setLocale={setLocale}
        />
      </ul>
    </span>
  );
};

export default LanguageSelector;
