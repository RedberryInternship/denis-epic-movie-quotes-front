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
    <>
      <div className='fixed inset-0 z-[70] bg-gradient-modal opacity-70 '></div>
      <div className='fixed inset-0 z-[100] overflow-y-auto'>
        <section className='mx-auto lg:py-[10vh] 2xl:py-[15vh] animate-grow z-50 top-0 w-full text-white overflow-auto lg:overflow-hidden lg:top-[11.6vh] lg:z-50 lg:w-1/2 lg:mx-auto lg:pb-3.5 lg:rounded-xl lg:pb-56'>
          <div
            className='bg-brand-article rounded-xl pb-24 lg:pb-0'
            ref={modalRef}
          >
            <header className='flex justify-between pt-3 min-h-[92px] px-7 items-center border-b border-brand-divide'>
              <div className='w-32'>{props.leftElement}</div>
              <h2
                className={
                  'w-full text-center text-xl font-medium lg:text-2xl ' +
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
    </>
  );
};

export default MovieModalWrapper;
