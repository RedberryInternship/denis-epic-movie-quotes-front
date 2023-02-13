import { useDisableBodyScroll, useOutsideClickListener } from 'hooks';
import { useRef } from 'react';

export const useModal = (
  closeModalCallback: () => void,
  onlyMobile = false
) => {
  useDisableBodyScroll(onlyMobile);

  const modalRef = useRef(null);
  useOutsideClickListener(modalRef, closeModalCallback);

  return modalRef;
};
