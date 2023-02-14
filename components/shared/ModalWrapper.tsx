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
    <div className='fixed inset-0 z-[100] overflow-y-auto'>
      <div className='relative w-full lg:w-[600px] mx-auto lg:py-[10vh] 2xl:py-[15vh]'>
        <section
          ref={modalRef}
          className={
            'relative min-h-screen overflow-auto flex flex-col items-center text-white pb-30 px-8.5 w-full bg-brand-background bg-gradient-modal z-40 ' +
            ' lg:min-h-0 lg:w-[600px] lg:px-30 lg:py-14 lg:bg-brand-modal lg:bg-none lg:rounded-xl lg:scrollbar-thin lg:scrollbar-thumb-brand-subtitle ' +
            (props.headingIsBig ? 'pt-30' : 'pt-19')
          }
        >
          <CloseModalButton onClick={props.closeModalCallback} />
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
