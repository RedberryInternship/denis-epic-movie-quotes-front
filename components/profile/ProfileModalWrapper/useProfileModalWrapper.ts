import { useModal } from 'hooks';
import { useEffect, useState } from 'react';

export const useProfileModalWrapper = (
  closeModalCallback: () => void,
  isLoading: boolean,
  handleSubmit: () => Promise<void>
) => {
  const modalRef = useModal(closeModalCallback);

  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [formIsConfirmed, setFormIsConfirmed] = useState(false);

  useEffect(() => {
    const submitForm = async () => {
      await handleSubmit();
      setConfirmModalIsOpen(false);
    };
    if (formIsConfirmed && !isLoading) {
      setFormIsConfirmed(false);
      submitForm();
    }
  }, [formIsConfirmed, handleSubmit, isLoading]);

  return {
    modalRef,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    setFormIsConfirmed,
  };
};
