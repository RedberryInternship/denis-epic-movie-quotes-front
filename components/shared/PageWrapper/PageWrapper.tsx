import { Navbar, SideMenu } from 'components';
import { usePageWrapper } from './usePageWrapper';
import { PropsType } from './types';
import toast, { Toaster } from 'react-hot-toast';

const PageWrapper = (props: PropsType) => {
  const { sideMenuRef, sideMenuIsOpen, toggleSideMenuIsOpen, toasts } =
    usePageWrapper();

  return (
    <>
      <div className='fixed top-[13.5vh] px-3.5 z-[100] w-full h-[86.5vh] pointer-events-none lg:top-[11.5vh] lg:pr-[7vw]'>
        <div className='relative w-full h-full'>
          <Toaster
            containerStyle={{
              position: 'absolute',
              inset: 0,
            }}
          />
        </div>
      </div>

      {Boolean(toasts.length) && (
        <div
          className='fixed inset-0 z-[70] bg-gradient-modal opacity-70 lg:hidden'
          onClick={() => toast.remove()}
        ></div>
      )}

      <Navbar
        toggleSideMenuIsOpen={toggleSideMenuIsOpen}
        searchBarProps={props.searchBarProps}
      />

      <main className='bg-brand-lightbackground bg-gradient-newsfeed text-white min-h-screen pt-8 lg:flex pb-32'>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          sideMenuRef={sideMenuRef}
          username={props.user.username}
        />
        {props.children}
      </main>
    </>
  );
};

export default PageWrapper;
