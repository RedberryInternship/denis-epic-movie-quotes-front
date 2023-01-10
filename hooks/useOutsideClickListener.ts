import { RefObject, useEffect } from 'react';

export const useOutsideClickListener = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) callback();
    };
    document.addEventListener('pointerdown', clickHandler);
    return () => document.removeEventListener('pointerdown', clickHandler);
  }, [ref, callback]);
};
