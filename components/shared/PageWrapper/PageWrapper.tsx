import { SideMenu, Navbar } from 'components';
import { PropsWithChildren } from 'react';
import { usePageWrapper } from './usePageWrapper';
import { User } from 'types';

const PageWrapper = (
  props: PropsWithChildren<{ user: User; displaySearchButton: boolean }>
) => {
  const { sideMenuRef, sideMenuIsOpen, toggleSideMenuIsOpen } =
    usePageWrapper();

  return (
    <>
      <Navbar
        toggleSideMenuIsOpen={toggleSideMenuIsOpen}
        displaySearchButton={props.displaySearchButton}
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
