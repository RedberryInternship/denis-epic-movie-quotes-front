import Image from 'next/image';
import { PropsType } from './types';
import { QuoteIcon } from 'components';
import { useMovieItem } from './useMovieItem';

const MovieItem = (props: PropsType) => {
  const { locale, redirectToMovie } = useMovieItem(props.id);

  return (
    <article
      className='flex flex-col w-[50vw] min-w-[358px] lg:w-auto lg:min-w-0 rounded-xl gap-4 cursor-pointer hover:scale-105 hover:backdrop-blur-3xl duration-200'
      onClick={redirectToMovie}
    >
      <Image
        className='aspect-[20/17] mx-auto rounded-xl object-cover w-[50vw] min-w-[358px] h-[302px] lg:mx-0 lg:min-w-auto lg:min-w-[305px] lg:w-auto lg:h-auto 2xl:w-[440px] 2xl:h-[371px]'
        src={props.image}
        width={440}
        height={371}
        alt=''
      />
      <div className='text-2xl mt-4 font-medium'>
        {props.title[locale]} ({props.releaseYear})
      </div>
      <div className='text-xl font-medium flex gap-3 items-center'>
        {props.quoteCount} <QuoteIcon />
      </div>
    </article>
  );
};

export default MovieItem;
