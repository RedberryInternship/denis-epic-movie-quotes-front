import { PropsWithChildren } from 'react';
import { CloseModalButton } from 'components';
import { useModal } from 'hooks';

const SplashModalWrapper = (
  props: PropsWithChildren<{
    iconComponent?: JSX.Element;
    title: string;
    subtitle: string;
    headingIsBig?: boolean;
    closeModalCallback: () => void;
  }>
) => {
  const modalRef = useModal(props.closeModalCallback);

  return (
    <div className='h-min w-full flex justify-center'>
      <div className='absolute w-full lg:w-[538px] lg:top-[10vh] 2xl:top-[20vh]'>
        <CloseModalButton onClick={props.closeModalCallback} />
        <section
          ref={modalRef}
          className='overflow-auto flex flex-col items-center h-screen text-white pb-15 px-8.5 w-full bg-brand-background bg-gradient-modal fixed z-40 
                     lg:h-auto lg:w-[538px] lg:max-h-[80vh] 2xl:max-h-[75vh] lg:px-22 lg:py-14 lg:bg-brand-modal lg:bg-none lg:rounded-xl lg:scrollbar-thin lg:scrollbar-thumb-brand-subtitle'
        >
          <div
            className='flex flex-col justify-center items-center mt-20 bg-gradient-nested-modal h-[360px] w-full rounded-0.5lg 
                       lg:m-0 lg:bg-none lg:h-auto'
          >
            {props.iconComponent}
            <h1 className='font-medium mx-auto text-2xl mt-5 lg:text-3.5xl'>
              {props.title}
            </h1>
            <h4 className='mt-6 mb-8 text-center lg:mt-8 lg:mb-10 px-3'>
              {props.subtitle}
            </h4>
            {props.children}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SplashModalWrapper;
