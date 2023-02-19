import { MovieQuote } from 'types';
import Image from 'next/image';
import { useQuoteImageEdit } from './useQuoteImageEdit';
import { PhotoCamera } from 'components';

const QuoteImageEdit = (props: { quote: MovieQuote }) => {
  const { register, uploadedImage, handleUpload, t } = useQuoteImageEdit();

  return (
    <div className='relative'>
      <Image
        src={uploadedImage || props.quote.image}
        width={897}
        height={513}
        alt={t('current_quote_image')}
        className='rounded-1.5lg max-h-[302px] lg:max-h-[408px] 2xl:max-h-[513px] object-cover'
      />
      <label
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center hover:cursor-pointer w-[135px] h-[84px] rounded-1.5lg bg-[#181623CC]'
        htmlFor='image'
      >
        <PhotoCamera />
        {t('change_photo')}
      </label>
      <input
        type='file'
        accept='image/jpeg, image/png, image/webp'
        id='image'
        className='hidden'
        {...register('image')}
        onChange={handleUpload}
      />
    </div>
  );
};

export default QuoteImageEdit;
