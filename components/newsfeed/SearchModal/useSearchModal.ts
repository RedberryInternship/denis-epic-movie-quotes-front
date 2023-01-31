import { useDisableBodyScroll } from 'hooks';
import { useRef } from 'react';
import { SetState } from 'types';

export const useSearchModal = (
  setSearchQuery: SetState<string>,
  setSearchIsActive: SetState<boolean>
) => {
  useDisableBodyScroll();

  const inputRef = useRef<HTMLInputElement>(null);

  const closeSearchModal = () => {
    setSearchQuery(inputRef.current?.value || '');
    setSearchIsActive(false);
  };

  return { closeSearchModal, inputRef };
};
