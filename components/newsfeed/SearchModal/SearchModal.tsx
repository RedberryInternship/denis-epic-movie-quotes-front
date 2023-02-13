import { ArrowBack } from 'components';
import { PropsType } from './types';
import { useSearchModal } from './useSearchModal';

const SearchModal = (props: PropsType) => {
  const { closeSearchModal, inputRef } = useSearchModal(
    props.setSearchQuery,
    props.setSearchIsActive
  );

  return (
    <section className='lg:hidden absolute z-50 top-0 min-h-screen w-full bg-[#12101A] text-white'>
      <div className='py-4 px-8 border-b border-brand-divide flex gap-4.5'>
        <button onClick={closeSearchModal}>
          <ArrowBack />
        </button>
        <input
          ref={inputRef}
          defaultValue={props.searchQuery}
          className='bg-transparent placeholder:text-[#CCC] outline-none w-full'
          placeholder='Search'
        />
      </div>
      <div className='px-19 pt-6.5 text-[#969599] flex flex-col gap-5.5'>
        <div>
          Enter <span className='text-white'>@</span> to search movies
        </div>
        <div>
          Enter <span className='text-white'>#</span> to search quotes
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
