import { useModal } from 'hooks';
import { useEffect, useState } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const useProfileModalWrapper = (
  closeModalCallback: () => void,
  isLoading: boolean,
  handleSubmit: () => Promise<void>
) => {
  const modalRef = useModal(closeModalCallback);

  const { trigger } = useFormContext();
  const { isValid } = useFormState();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [formIsConfirmed, setFormIsConfirmed] = useState(false);
  const openConfirmIfValid = async () => {
    if (isValid) {
      setConfirmModalIsOpen(true);
    } else {
      await trigger();
    }
  };

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

  const { t } = useTranslation('profile');

  return {
    modalRef,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    openConfirmIfValid,
    setFormIsConfirmed,
    t,
  };
};
