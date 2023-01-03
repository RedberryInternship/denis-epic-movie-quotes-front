import { useDisableBodyScroll, useOutsideClickListener } from 'hooks';
import { useRef } from 'react';

export const useModalWrapper = (closeModalCallback: () => void) => {
  useDisableBodyScroll();

  const modalRef = useRef(null);
  useOutsideClickListener(modalRef, closeModalCallback);

  return modalRef;
};
