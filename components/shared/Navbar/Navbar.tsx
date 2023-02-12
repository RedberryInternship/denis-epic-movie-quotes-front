import {
  Bell,
  Burger,
  HeaderTitle,
  LanguageSelector,
  NotificationsModal,
  Search,
  SearchModal,
} from 'components';
import { useNavbar } from './useNavbar';
import { PropsType } from './types';

const Navbar = (props: PropsType) => {
  const {
    logout,
    unreadNotificationCount,
    showNotifications,
    toggleShowNotifications,
    notifications,
  } = useNavbar();

  return (
    <>
      {props.searchBarProps?.searchIsActive && (
        <SearchModal {...props.searchBarProps} />
      )}

      {showNotifications && (
        <NotificationsModal
          notifications={notifications}
          toggleShowNotifications={toggleShowNotifications}
        />
      )}

      <header className='flex justify-between items-center h-22 bg-brand-lightmodal px-9 lg:px-17.5'>
        <div className='hidden lg:block'>
          <HeaderTitle />
        </div>
        <button className='lg:hidden' onClick={props.toggleSideMenuIsOpen}>
          <Burger />
        </button>
        <div className='flex gap-3 lg:gap-5 items-center'>
          {props.searchBarProps && (
            <button
              className='lg:hidden w-6 h-6'
              onClick={() => props.searchBarProps!.setSearchIsActive(true)}
            >
              <Search />
            </button>
          )}
          <button
            className='relative left-2 p-2 text-white hover:text-brand-crimson'
            onClick={toggleShowNotifications}
          >
            {unreadNotificationCount ? (
              <span className='animate-pulse absolute text-white top-0 w-[25px] h-[25px] bg-[#E33812] rounded-full'>
                {unreadNotificationCount}
              </span>
            ) : undefined}

            <Bell />
          </button>
          <div className='hidden lg:flex text-white'>
            <LanguageSelector />
            <button
              className='ml-4 h-9.5 px-6.5 border border-white rounded'
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
