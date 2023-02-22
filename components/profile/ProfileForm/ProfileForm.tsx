import {
  ArrowBack,
  ArrowSmallRight,
  ProfileEmailSection,
  ProfileFormActions,
  ProfileImageInput,
  ProfileInput,
  ProfilePasswordSection,
  ProfileUsernameSection,
} from 'components';
import { useProfileForm } from './useProfileForm';
import { PropsType } from './types';

const ProfileForm = (props: PropsType) => {
  const {
    handleSubmit,
    isLoading,
    setIsEditingUsername,
    isEditingUsername,
    setIsEditingImage,
    isEditingImage,
    setIsEditingPassword,
    isEditingPassword,
    disableEditing,
    goBack,
    t,
  } = useProfileForm(props.isManagingEmails, props.setIsManagingEmails);

  return (
    <form
      className='lg:w-[66.6vw] 2xl:w-[50vw]'
      onSubmit={handleSubmit}
      encType='multipart/form-data'
    >
      <button type='button' className='ml-8 -mt-4 lg:hidden' onClick={goBack}>
        <ArrowBack />
      </button>
      <h1 className='hidden text-2xl font-medium ml-11.5 lg:block'>
        {t('my_profile')}
      </h1>
      <section className='max-h-[calc(100vh-10.5rem)] overflow-y-scroll lg:overflow-y-visible lg:max-h-max bg-brand-lightmodal pt-10 pb-22.5 px-8 rounded-xl mt-4 lg:bg-brand-article lg:mt-[5vh] 2xl:mt-[11.6vh] lg:pt-0 lg:pl-21 lg:pr-8'>
        <div className='flex flex-col items-center gap-2 lg:relative lg:-top-18'>
          <ProfileImageInput
            isEditingImage={isEditingImage}
            setIsEditingImage={setIsEditingImage}
          />
        </div>
        <div className='mt-15 lg:-mt-8'>
          <ProfileUsernameSection
            username={props.user.username}
            isEditingUsername={isEditingUsername}
            setIsEditingUsername={setIsEditingUsername}
            setUsernameModalIsOpen={props.setUsernameModalIsOpen}
          />
          <hr className='hidden lg:block mt-6 mb-10 border-brand-divide w-1/2 max-w-[528px]' />

          {props.user.isGoogleUser ? (
            <ProfileInput
              label={t('email')}
              name='email'
              placeholder={props.user.emails[0].address}
              isActive={false}
            />
          ) : (
            <>
              <ProfileEmailSection
                emails={props.user.emails}
                setIsAddingEmail={props.setIsAddingEmail}
              />
              <hr className='hidden lg:block mt-9 mb-10 border-brand-divide w-1/2 max-w-[528px]' />
              <ProfilePasswordSection
                isEditingPassword={isEditingPassword}
                setIsEditingPassword={setIsEditingPassword}
                setPasswordModalIsOpen={props.setPasswordModalIsOpen}
              />
              <div className='flex justify-between items-center uppercase lg:hidden'>
                {t('email')}
                <button
                  type='button'
                  onClick={() => props.setIsManagingEmails(true)}
                >
                  <ArrowSmallRight />
                </button>
              </div>
            </>
          )}
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
