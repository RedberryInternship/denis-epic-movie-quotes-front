import { ProfilePicture, SelfProfilePicture } from 'components';
import { SetState } from 'types';
import { useProfileImageInput } from './useProfileImageInput';

const ProfileImageInput = (props: {
  setIsEditingImage: SetState<boolean>;
  isEditingImage: boolean;
}) => {
  const { register, uploadedImage, handleUpload } = useProfileImageInput(
    props.setIsEditingImage
  );

  return (
    <>
      {uploadedImage && props.isEditingImage ? (
        <ProfilePicture
          size={188}
          classNames='w-[188px] h-[188px]'
          image={uploadedImage}
        />
      ) : (
        <SelfProfilePicture size={188} classNames='w-[188px] h-[188px]' />
      )}

      <label className='text-xl hover:cursor-pointer' htmlFor='image'>
        Upload new photo
      </label>
      <input
        type='file'
        accept='image/jpeg, image/png, image/webp'
        id='image'
        className='hidden'
        alt='Profile Picture'
        {...register('image', {
          onChange: handleUpload,
        })}
      />
    </>
  );
};

export default ProfileImageInput;
