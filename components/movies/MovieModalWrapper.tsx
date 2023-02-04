import { PropsWithChildren } from 'react';
import { useModal } from 'hooks';

const MovieModalWrapper = (
  props: PropsWithChildren<{
    title: string;
    rightIcon: JSX.Element;
    onRightIconClick: () => void;
  }>
) => {
  const modalRef = useModal(props.onRightIconClick);

  return (
    <div className='lg:flex justify-center'>
      <section className='fixed top-0 min-h-screen max-h-screen w-full text-white overflow-auto lg:overflow-hidden lg:top-[11.6vh] lg:z-50 lg:w-1/2 lg:mx-auto lg:min-h-0 lg:pb-3.5 lg:rounded-xl lg:pb-56'>
        <div
          className='bg-brand-article rounded-xl lg:overflow-auto lg:h-[82vh] min-h-screen lg:min-h-0 lg:relative lg:left-5 pb-24 lg:pb-0'
          ref={modalRef}
        >
          <header className='flex justify-between pt-3 min-h-[92px] px-7 items-center border-b border-brand-divide'>
            <button className='opacity-80 p-4'></button>
            <h2 className='text-xl font-medium lg:text-2xl'>{props.title}</h2>
            <button className='opacity-80 p-4' onClick={props.onRightIconClick}>
              {props.rightIcon}
            </button>
          </header>
          <div className='py-8.5 pl-8 pr-9.5'>{props.children}</div>
        </div>
      </section>
    </div>
  );
};

export default MovieModalWrapper;
