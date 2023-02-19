import { useDisableBodyScroll } from 'hooks';
import { useRef } from 'react';
import { SetState } from 'types';
import { useTranslation } from 'next-i18next';

export const useSearchModal = (
  setSearchQuery: SetState<string>,
  setSearchIsActive: SetState<boolean>
) => {
  useDisableBodyScroll(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const closeSearchModal = () => {
    setSearchQuery(inputRef.current?.value || '');
    setSearchIsActive(false);
  };

  const { t } = useTranslation('common');

  return { t, closeSearchModal, inputRef };
};
