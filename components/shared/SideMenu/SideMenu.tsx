import { Camera, House, SelfProfilePicture } from 'components';
import { MutableRefObject } from 'react';
import { useSideMenu } from './useSideMenu';

const SideMenu = (props: {
  sideMenuIsOpen: boolean;
  sideMenuRef: MutableRefObject<null>;
  username: string;
}) => {
  const router = useSideMenu();

  return (
    <aside
      className={
        'fixed top-0 w-[87vw] h-screen p-11 bg-brand-article text-white rounded-r-xl ' +
        'lg:block lg:static lg:w-[28vw] lg:bg-brand-lightbackground lg:pt-0 lg:pl-17.5 z-50' +
        (props.sideMenuIsOpen ? '' : ' hidden')
      }
      ref={props.sideMenuRef}
    >
      <button
        className='flex gap-5 text-left'
        onClick={() => router.push('/profile')}
      >
        <SelfProfilePicture
          size={60}
          classNames={
            'w-15 h-15 my-1.5' +
            (router.pathname === '/profile' ? ' border-2 border-brand-red' : '')
          }
        />
        <div>
          <div className='text-xl lg:text-2xl'>{props.username}</div>
          <div className='text-sm text-brand-pale lg:text-base lg:mt-2'>
            Edit your profile
          </div>
        </div>
      </button>
      <nav className='pl-2 text-xl'>
        <button
          className='flex gap-7.5 items-center mt-10'
          onClick={() => router.push('/home')}
        >
          <House isActive={router.pathname === '/home'} /> News feed
        </button>
        <button
          className='flex gap-7.5 items-center mt-10'
          onClick={() => router.push('/movies')}
        >
          <Camera isActive={router.pathname === '/movies'} /> List of movies
        </button>
      </nav>
    </aside>
  );
};

export default SideMenu;
