import {
  ArrowBack,
  ArrowSmallRight,
  ProfileFormActions,
  ProfileImageInput,
} from 'components';
import { useProfileForm } from './useProfileForm';
import { PropsType } from './types';

const ProfileForm = (props: PropsType) => {
  const {
    handleSubmit,
    isLoading,
    isEditingUsername,
    setIsEditingImage,
    isEditingImage,
    isEditingPassword,
    disableEditing,
    goBack,
  } = useProfileForm();

  return (
    <form
      className='lg:w-2/3 2xl:w-1/2'
      onSubmit={handleSubmit}
      encType='multipart/form-data'
    >
      <button type='button' className='ml-8 -mt-4 lg:hidden' onClick={goBack}>
        <ArrowBack />
      </button>
      <h1 className='hidden text-2xl font-medium ml-7.5 lg:block'>
        My profile
      </h1>
      <section className='bg-brand-lightmodal pt-10 pb-22.5 px-8 rounded-xl mt-4 lg:bg-brand-article lg:mt-[5vh] 2xl:mt-[11.6vh] lg:pt-0 lg:pl-21 lg:pr-8'>
        <div className='flex flex-col items-center gap-2 lg:relative lg:-top-18'>
          <ProfileImageInput
            isEditingImage={isEditingImage}
            setIsEditingImage={setIsEditingImage}
          />
        </div>
        <div className='mt-15 lg:-mt-8'>
          <hr className='hidden lg:block mt-6 mb-10 border-brand-divide w-1/2 max-w-[528px]' />
          <div className='flex justify-between items-center uppercase lg:hidden'>
            Email
            <button type='button'>
              <ArrowSmallRight />
            </button>
          </div>
        </div>
      </section>
      {(isEditingImage || isEditingUsername || isEditingPassword) && (
        <ProfileFormActions
          handleSubmit={handleSubmit}
          disableEditing={disableEditing}
          isLoading={isLoading}
        />
      )}
    </form>
  );
};

export default ProfileForm;
