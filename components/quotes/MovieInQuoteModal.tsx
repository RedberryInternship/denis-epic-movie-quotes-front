import { MovieWithGenres } from 'types';
import Image from 'next/image';
import { useLocale } from 'hooks';

const MovieInQuoteModal = (props: { movie: MovieWithGenres }) => {
  const locale = useLocale();

  return (
    <article className='flex items-center rounded bg-black min-h-[114px] px-2 py-4 gap-3 lg:bg-transparent lg:min-h-[158px] lg:gap-7 lg:mb-8'>
      <Image
        src={props.movie?.image}
        width={290}
        height={158}
        alt=''
        className='max-w-[112px] h-[82px] bg-cover rounded-1.5lg lg:max-w-[290px] lg:h-[158px]'
      />
      <div className='flex flex-col gap-2 lg:grid lg:h-full lg:gap-5'>
        <div className='text-brand-khaki lg:font-medium lg:text-2xl'>
          {props.movie.title[locale]} ({props.movie.release_year})
        </div>
        <div className='text-brand-pale font-bold lg:row-start-3'>
          Director:{' '}
          <span className='text-white font-medium'>
            {props.movie.director[locale]}
          </span>
        </div>
        <div className='flex gap-1 flex-wrap lg:gap-2 lg:row-start-2'>
          {props.movie.genres.map((genre) => (
            <span
              className='inline-flex rounded font-bold text-xs items-center px-2 h-5 bg-brand-subtitle lg:h-7 lg:px-3'
              key={genre.id}
            >
              {genre.name[locale]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default MovieInQuoteModal;
