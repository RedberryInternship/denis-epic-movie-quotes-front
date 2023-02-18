import { Camera, SelectInput } from 'components';
import { useMovieSelect } from './useMovieSelect';

const MovieSelect = () => {
  const { movieOptions, movieValue, t } = useMovieSelect();

  return (
    <div className='relative bg-black'>
      <div className='absolute left-6 z-50 inset-y-1/2 -translate-y-1/2 h-6 flex items-center gap-3 pointer-events-none w-full'>
        <Camera isActive={false} />
        <span className='lg:text-2xl truncate w-[45%] lg:w-[80%]'>
          {movieValue ? movieValue.label : t('choose_movie')}
        </span>
      </div>
      <SelectInput
        name='movie'
        options={movieOptions || []}
        placeholder=''
        noOptionsMessageCallback={() => <div>{t('movie_select_none')}</div>}
      />
    </div>
  );
};

export default MovieSelect;
