import { useEffect } from 'react';

export const useDisableBodyScroll = (onlyMobile = false) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    if (onlyMobile) {
      document.body.classList.add('lg:overflow-auto');
    }

    return () => {
      document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
    };
  }, [onlyMobile]);
};
