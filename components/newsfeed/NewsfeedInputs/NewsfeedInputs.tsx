import {
  AddOrEditQuoteModal,
  FormWrapper,
  Pencil,
  SearchBar,
} from 'components';
import { useNewsfeedInputs } from './useNewsfeedInputs';
import { PropsType } from './types';

const NewsfeedInputs = (props: PropsType) => {
  const {
    handleSearchInputChange,
    resetSearch,
    setIsAddingQuote,
    isAddingQuote,
    closeQuoteModal,
    user,
    t,
  } = useNewsfeedInputs(props.setSearchQuery, props.setSearchIsActive);

  return (
    <>
      {isAddingQuote && (
        <FormWrapper>
          <AddOrEditQuoteModal
            user={user}
            closeModal={closeQuoteModal}
            addingFromNewsfeed={true}
          />
        </FormWrapper>
      )}

      <div className='flex lg:h-fit lg:min-h-[52px] lg:mb-5.5 overflow-hidden'>
        <button
          onClick={() => setIsAddingQuote(true)}
          className={
            'flex gap-3 mb-10.5 lg:min-h-[52px] ml-9 lg:bg-brand-btn-background lg:h-full lg:ml-0 lg:rounded-1.5lg lg:px-4.5 items-center ' +
            (props.searchIsActive
              ? 'lg:h-full lg:w-fit 2xl:min-w-[218px] lg:justify-center lg:mb-1.5'
              : 'lg:w-full lg:mb-0')
          }
        >
          <Pencil />
          <span>{t('write_quote')}</span>
        </button>
        <SearchBar
          setSearchIsActive={props.setSearchIsActive}
          searchIsActive={props.searchIsActive}
          searchQuery={props.searchQuery}
          handleSearchInputChange={handleSearchInputChange}
          resetSearch={resetSearch}
          placeholder={t('newsfeed_search_placeholder')}
        />
      </div>
    </>
  );
};

export default NewsfeedInputs;
