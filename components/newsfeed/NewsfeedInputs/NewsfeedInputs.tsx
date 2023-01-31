import { Close, Pencil, Search } from 'components';
import { SetState } from 'types';
import { useNewsfeedInputs } from './useNewsfeedInputs';

const NewsfeedInputs = (props: {
  searchIsActive: boolean;
  setSearchIsActive: SetState<boolean>;
  searchQuery: string;
  setSearchQuery: SetState<string>;
}) => {
  const { resetSearch, handleSearchInputChange } = useNewsfeedInputs(
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
      {props.searchIsActive ? (
        <div className='hidden lg:flex gap-4 opacity-70 ml-6 pr-2 min-w-max w-full items-center lg:text-base 2xl:text-xl pb-1.5 border-b border-gray'>
          <div className='w-5 h-5'>
            <Search />
          </div>
          <input
            defaultValue={props.searchQuery}
            onChange={handleSearchInputChange}
            className='bg-transparent placeholder:text-white w-full outline-0'
            placeholder='Enter @ to search movies, Enter # to search quotes'
          />
          <button
            onClick={resetSearch}
            className='w-10 h-8 rounded-full bg-brand-divide flex items-center justify-center'
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
          Search by
        </button>
      )}
    </div>
  );
};

export default NewsfeedInputs;
