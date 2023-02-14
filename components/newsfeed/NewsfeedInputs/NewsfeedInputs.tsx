import { Pencil, SearchBar } from 'components';
import { SetState } from 'types';
import { useSearchBar } from 'hooks';

const NewsfeedInputs = (props: {
  searchIsActive: boolean;
  setSearchIsActive: SetState<boolean>;
  searchQuery: string;
  setSearchQuery: SetState<string>;
}) => {
  const { handleSearchInputChange, resetSearch } = useSearchBar(
    props.setSearchQuery,
    props.setSearchIsActive
  );

  return (
    <div className='flex lg:h-fit lg:min-h-[52px] lg:mb-5.5 overflow-hidden'>
      <button
        className={
          'flex gap-3 mb-10.5 lg:min-h-[52px] ml-9 lg:bg-brand-btn-background lg:h-full lg:ml-0 lg:rounded-1.5lg lg:px-4.5 items-center ' +
          (props.searchIsActive
            ? 'lg:h-full lg:w-fit 2xl:min-w-[218px] lg:justify-center lg:mb-1.5'
            : 'lg:w-full lg:mb-0')
        }
      >
        <Pencil />
        <span>Write new quote</span>
      </button>
      <SearchBar
        setSearchIsActive={props.setSearchIsActive}
        searchIsActive={props.searchIsActive}
        searchQuery={props.searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        resetSearch={resetSearch}
        placeholder='Enter @ to search movies, Enter # to search quotes'
      />
    </div>
  );
};

export default NewsfeedInputs;
