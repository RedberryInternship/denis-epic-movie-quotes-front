import { Close, Search } from 'components';
import { PropsType } from './types';
import { useTranslation } from 'next-i18next';

const SearchBar = (props: PropsType) => {
  const { t } = useTranslation('common');

  return (
    <>
      {props.searchIsActive ? (
        <div className='animate-grow-x origin-right hidden lg:flex gap-4 opacity-70 ml-6 pr-2 min-w-max w-full items-center lg:text-base 2xl:text-xl pb-1.5 border-b border-gray'>
          <div className='min-w-[20px] min-h-[20px]'>
            <Search />
          </div>
          <input
            defaultValue={props.searchQuery}
            onChange={props.handleSearchInputChange}
            className='bg-transparent placeholder:text-brand-placeholder w-full outline-0'
            placeholder={props.placeholder}
          />
          <button
            onClick={props.resetSearch}
            className='min-w-[32px] min-h-[32px] rounded-full bg-brand-divide flex items-center justify-center'
          >
            <Close />
          </button>
        </div>
      ) : (
        <button
          className='hidden lg:flex gap-4 opacity-70 pl-6 pr-2 min-w-max items-center text-xl'
          onClick={() => props.setSearchIsActive(true)}
        >
          <div className='w-5 h-5'>
            <Search />
          </div>
          {t('search_by')}
        </button>
      )}
    </>
  );
};

export default SearchBar;
