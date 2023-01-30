import { useOutsideClickListener, useToggle } from 'hooks';
import { useRef } from 'react';

export const usePageWrapper = () => {
  const [sideMenuIsOpen, toggleSideMenuIsOpen] = useToggle(false);
  const sideMenuRef = useRef(null);
  useOutsideClickListener(sideMenuRef, () => {
    if (sideMenuIsOpen) toggleSideMenuIsOpen();
  });

  return {
    sideMenuIsOpen,
    toggleSideMenuIsOpen,
    sideMenuRef,
  };
};
