import { useOutsideClickListener, useToggle } from 'hooks';
import { useRef } from 'react';
import { useToasterStore } from 'react-hot-toast';

export const usePageWrapper = () => {
  const [sideMenuIsOpen, toggleSideMenuIsOpen] = useToggle(false);
  const sideMenuRef = useRef(null);
  useOutsideClickListener(sideMenuRef, () => {
    if (sideMenuIsOpen) toggleSideMenuIsOpen();
  });

  const { toasts } = useToasterStore();

  return {
    sideMenuIsOpen,
    toggleSideMenuIsOpen,
    sideMenuRef,
    toasts,
  };
};
