import { MovieWithGenres } from 'types';
import Image from 'next/image';
import { useLocale } from 'hooks';

const MovieInQuoteModal = (props: { movie: MovieWithGenres }) => {
  const locale = useLocale();

  return (
    <article className='flex items-center rounded bg-black min-h-[114px] px-2 py-4 gap-3'>
      <Image
        src={props.movie?.image}
        width={290}
        height={158}
        alt=''
        className='max-w-[112px] h-[82px] bg-cover rounded-1.5lg'
      />
      <div className='flex flex-col gap-2'>
        <div className='text-brand-khaki'>
          {props.movie.title[locale]} ({props.movie.release_year})
        </div>
        <div className='text-brand-pale font-bold'>
          Director:{' '}
          <span className='text-white font-base'>
            {props.movie.director[locale]}
          </span>
        </div>
        <div className='flex gap-1 flex-wrap'>
          {props.movie.genres.map((genre) => (
            <span
              className='inline-flex rounded font-bold text-xs items-center px-2 h-5 bg-brand-subtitle'
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
