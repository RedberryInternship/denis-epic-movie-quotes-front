import { PropsWithChildren } from 'react';
import { CloseModalButton } from 'components';
import { useModal } from 'hooks';

const ModalWrapper = (
  props: PropsWithChildren<{
    title: string;
    subtitle: string;
    headingIsBig?: boolean;
    closeModalCallback: () => void;
  }>
) => {
  const modalRef = useModal(props.closeModalCallback);

  return (
    <div className='h-min w-full flex justify-center'>
      <div className='absolute w-full lg:w-[600px] lg:top-[10vh] 2xl:top-[12.5vh]'>
        <CloseModalButton onClick={props.closeModalCallback} />
        <section
          ref={modalRef}
          className={
            'overflow-auto flex flex-col items-center h-screen text-white pb-15 px-8.5 w-full bg-brand-background bg-gradient-modal fixed z-40 ' +
            'lg:h-auto lg:w-[600px] lg:max-h-[80vh] 2xl:max-h-[75vh] lg:px-30 lg:py-14 lg:bg-brand-modal lg:bg-none lg:rounded-xl lg:scrollbar-thin lg:scrollbar-thumb-brand-subtitle ' +
            (props.headingIsBig ? 'pt-30' : 'pt-19')
          }
        >
          <h1
            className={
              'font-medium mx-auto text-center ' +
              (props.headingIsBig ? 'text-3.5xl' : 'text-2xl lg:text-3.5xl')
            }
          >
            {props.title}
          </h1>
          <h4 className='text-brand-subtitle mt-3 mb-10.5 text-center'>
            {props.subtitle}
          </h4>
          {props.children}
        </section>
      </div>
    </div>
  );
};

export default ModalWrapper;
