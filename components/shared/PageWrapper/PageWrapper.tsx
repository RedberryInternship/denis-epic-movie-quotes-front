import { Navbar, SideMenu } from 'components';
import { usePageWrapper } from './usePageWrapper';
import { PropsType } from './types';

const PageWrapper = (props: PropsType) => {
  const { sideMenuRef, sideMenuIsOpen, toggleSideMenuIsOpen } =
    usePageWrapper();

  return (
    <>
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
