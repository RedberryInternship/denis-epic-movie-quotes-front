import { PhotoCamera } from 'components';
import { useMovieImageUploadInput } from './useMovieImageUploadInput';

const MovieImageUploadInput = (props: { isEditing: boolean | undefined }) => {
  const { register, imageValue, handleDrop, hasErrors, t } =
    useMovieImageUploadInput();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
      className={
        'flex px-[17px] gap-4 border-brand-subtitle justify-between lg:justify-start lg:gap-2 items-center h-20.5 border bg-transparent rounded px-[17px] w-full mb-4 lg:mb-5 placeholder:text-[#CCC] focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 ' +
        (hasErrors
          ? '!border-brand-red border-1.5 focus:border-1.5 focus:border-brand-red'
          : '')
      }
    >
      <div className='flex items-center gap-3 max-w-[calc(100%-140px)]'>
        <div className='min-h-6 min-w-6'>
          <PhotoCamera />
        </div>
        <span className='truncate hidden lg:block'>
          {imageValue ? imageValue[0]?.name : t('image_placeholder')}
        </span>
        <span className='truncate lg:hidden'>
          {imageValue ? imageValue[0]?.name : t('upload_image')}
        </span>
      </div>
      <label
        className='text-xl hover:cursor-pointer bg-brand-purple p-2.5 rounded-[2px] min-w-[100px]'
        htmlFor='image'
      >
        {t('choose_file')}
      </label>
      <input
        type='file'
        accept='image/jpeg, image/png, image/webp'
        id='image'
        className='hidden'
        {...register('image', {
          required: !props.isEditing,
        })}
      />
    </div>
  );
};

export default MovieImageUploadInput;
