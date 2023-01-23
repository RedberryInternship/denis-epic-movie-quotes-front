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
        'lg:block lg:static lg:w-[28vw] lg:bg-brand-lightbackground lg:pt-0 lg:pl-17.5' +
        (props.sideMenuIsOpen ? '' : ' hidden')
      }
      ref={props.sideMenuRef}
    >
      <div className='flex gap-5'>
        <SelfProfilePicture size={60} classNames='w-15 h-15 my-1.5' />
        <div>
          <div className='text-xl lg:text-2xl'>{props.username}</div>
          <div className='text-sm text-brand-pale lg:text-base lg:mt-2'>
            Edit your profile
          </div>
        </div>
      </div>
      <nav className='pl-2 text-xl'>
        <button className='flex gap-7.5 items-center mt-10'>
          <House isActive={router.pathname === '/home'} /> News feed
        </button>
        <button className='flex gap-7.5 items-center mt-10'>
          <Camera isActive={router.pathname === '/movies'} /> List of movies
        </button>
      </nav>
    </aside>
  );
};

export default SideMenu;
