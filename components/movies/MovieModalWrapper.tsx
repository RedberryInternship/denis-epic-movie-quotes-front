import { PropsWithChildren } from 'react';
import { useModal } from 'hooks';

const MovieModalWrapper = (
  props: PropsWithChildren<{
    title: string;
    rightIcon: JSX.Element;
    onRightIconClick: () => void;
    leftElement?: JSX.Element;
    hideTitle?: boolean;
    removePadding?: boolean;
  }>
) => {
  const modalRef = useModal(props.onRightIconClick);

  return (
    <div className='lg:flex justify-center'>
      <section className='fixed animate-grow z-50 top-0 min-h-screen max-h-screen w-full text-white overflow-auto lg:overflow-hidden lg:top-[11.6vh] lg:z-50 lg:w-1/2 lg:mx-auto lg:min-h-0 lg:pb-3.5 lg:rounded-xl lg:pb-56'>
        <div
          className='bg-brand-article rounded-xl lg:overflow-auto lg:h-[82vh] min-h-screen lg:min-h-0 lg:relative lg:left-5 pb-24 lg:pb-0'
          ref={modalRef}
        >
          <header className='flex justify-between pt-3 min-h-[92px] px-7 items-center border-b border-brand-divide'>
            <div className='w-32'>{props.leftElement}</div>
            <h2
              className={
                'text-xl font-medium lg:text-2xl ' +
                (props.hideTitle ? 'hidden lg:block' : '')
              }
            >
              {props.title}
            </h2>
            <div className='w-32 flex justify-end'>
              <button
                className='opacity-80 p-1'
                onClick={props.onRightIconClick}
              >
                {props.rightIcon}
              </button>
            </div>
          </header>
          <div
            className={
              props.removePadding
                ? 'lg:py-8.5 lg:pl-8 lg:pr-9.5'
                : 'py-8.5 pl-8 pr-9.5'
            }
          >
            {props.children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieModalWrapper;
