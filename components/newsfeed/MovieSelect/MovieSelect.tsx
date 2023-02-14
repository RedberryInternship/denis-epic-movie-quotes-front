import { Camera, SelectInput } from 'components';
import { useMovieSelect } from './useMovieSelect';

const MovieSelect = () => {
  const { movieOptions, movieValue } = useMovieSelect();

  return (
    <div className='relative bg-black'>
      <div className='absolute left-6 z-50 inset-y-1/2 -translate-y-1/2 h-6 flex items-center gap-3 pointer-events-none w-full'>
        <Camera isActive={false} />
        <span className='lg:text-2xl truncate w-[45%] lg:w-[80%]'>
          {movieValue ? movieValue.label : 'Choose movie'}
        </span>
      </div>
      <SelectInput
        name='movie'
        options={movieOptions || []}
        placeholder=''
        noOptionsMessageCallback={() => (
          <div>You haven&apos;t added any movies</div>
        )}
      />
    </div>
  );
};

export default MovieSelect;
