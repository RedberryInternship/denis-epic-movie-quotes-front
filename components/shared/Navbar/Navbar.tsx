import {
  Bell,
  Burger,
  HeaderTitle,
  LanguageSelector,
  Search,
  SearchModal,
} from 'components';
import { useNavbar } from './useNavbar';
import { PropsType } from './types';

const Navbar = (props: PropsType) => {
  const { logout } = useNavbar();

  return (
    <>
      {props.searchBarProps?.searchIsActive && (
        <SearchModal {...props.searchBarProps} />
      )}

      <header className='flex justify-between items-center h-22 bg-brand-lightmodal px-9 lg:px-17.5'>
        <div className='hidden lg:block'>
          <HeaderTitle />
        </div>
        <button className='lg:hidden' onClick={props.toggleSideMenuIsOpen}>
          <Burger />
        </button>
        <div className='flex gap-5 items-center'>
          {props.searchBarProps && (
            <button
              className='lg:hidden w-6 h-6'
              onClick={() => props.searchBarProps!.setSearchIsActive(true)}
            >
              <Search />
            </button>
          )}
          <Bell />
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
