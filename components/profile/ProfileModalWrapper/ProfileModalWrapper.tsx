import { Loading, RedButton } from 'components';
import { PropsWithChildren } from 'react';
import { useProfileModalWrapper } from './useProfileModalWrapper';

const ProfileModalWrapper = (
  props: PropsWithChildren<{
    closeModalCallback: () => void;
    handleSubmit: () => Promise<void>;
    isLoading: boolean;
  }>
) => {
  const {
    confirmModalIsOpen,
    modalRef,
    setFormIsConfirmed,
    setConfirmModalIsOpen,
    openConfirmIfValid,
  } = useProfileModalWrapper(
    props.closeModalCallback,
    props.isLoading,
    props.handleSubmit
  );

  return (
    <>
      {confirmModalIsOpen ? (
        <>
          <div className='fixed inset-0 z-[70] bg-gradient-modal opacity-70'></div>
          <div className='fixed animate-grow z-[100] top-22 pt-38 px-2 w-full bg-brand-lightbackground min-h-screen pt-18 text-white'>
            <div className='rounded-1.5lg bg-gradient-nested-modal'>
              <div className='pt-14 pb-11 border-b border-brand-divide px-4 text-center'>
                Are you sure you want to make these changes?
              </div>
              <div className='h-19 flex justify-between items-center pr-7 pl-8'>
                <button
                  type='button'
                  className='text-brand-pale lg:text-white'
                  onClick={() => setConfirmModalIsOpen(false)}
                >
                  Cancel
                </button>
                <RedButton
                  onClick={() => setFormIsConfirmed(true)}
                  label={props.isLoading ? <Loading /> : 'Confirm'}
                  classNames='px-4.5'
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className='fixed z-[100] top-40 min-h-screen w-full rounded text-white pointer-events-none flex items-stretch lg:absolute lg:top-0 lg:p-0 lg:min-h-0 lg:rounded-0 lg:pointer-events-auto'
          ref={modalRef}
        >
          <button
            className='absolute z-[120] -top-15 left-7 w-10 h-10 pointer-events-auto lg:hidden'
            onClick={props.closeModalCallback}
          ></button>
          <div className='bg-brand-lightbackground max-h-[calc(100vh-5.5rem)] w-full lg:bg-transparent z-30'>
            <div className='pointer-events-auto h-min text-white w-full flex items-center justify-center'>
              <form
                onSubmit={props.handleSubmit}
                className='static animate-grow overflow-auto max-h-full min-h-[173px] lg:h-auto lg:fixed z-40 lg:top-[20vh] 2xl:top-[32vh] w-[615px] lg:bg-brand-article rounded-xl p-0 lg:pt-6 lg:pb-10 pb-20'
              >
                <div className='hidden lg:block border-b border-brand-pale'>
                  <h2 className='text-2xl font-medium pr-14 pl-8 pb-6'>
                    Add new Email
                  </h2>
                </div>
                <div className='px-8 pt-8 pb-5 lg:pt-14 lg:pr-14 h-full bg-brand-lightmodal lg:bg-transparent rounded-xl'>
                  {props.children}
                </div>
                <div className='flex justify-between lg:justify-end text-xl gap-8 pt-13 pb-20 px-8 lg:p-0 lg:mt-8 lg:mr-14'>
                  <button
                    type='button'
                    className='text-brand-pale text-[17px] lg:text-brand-lightgray lg:text-white'
                    onClick={props.closeModalCallback}
                  >
                    Cancel
                  </button>
                  <RedButton
                    onClick={openConfirmIfValid}
                    label='Add'
                    classNames='lg:hidden text-base px-4.5'
                  />
                  <RedButton
                    onClick={props.handleSubmit}
                    label={props.isLoading ? <Loading /> : 'Add'}
                    classNames='hidden lg:inline-block px-4.5'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModalWrapper;
