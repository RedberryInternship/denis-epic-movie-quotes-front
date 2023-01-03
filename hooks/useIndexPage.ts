import { useState } from 'react';

export const useIndexPage = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [forgotPassIsOpen, setForgotPassIsOpen] = useState(false);
  const modalIsOpen = loginIsOpen || registerIsOpen || forgotPassIsOpen;

  return {
    loginIsOpen,
    setLoginIsOpen,
    registerIsOpen,
    setRegisterIsOpen,
    forgotPassIsOpen,
    setForgotPassIsOpen,
    modalIsOpen,
  };
};
