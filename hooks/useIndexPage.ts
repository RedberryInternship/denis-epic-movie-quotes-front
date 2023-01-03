import { useState } from 'react';

export const useIndexPage = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const modalIsOpen = loginIsOpen;

  return {
    loginIsOpen,
    setLoginIsOpen,
    modalIsOpen,
  };
};
