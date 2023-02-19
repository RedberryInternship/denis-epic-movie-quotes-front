import { useSearchBar } from 'hooks';
import { SetState } from 'types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useTranslation } from 'next-i18next';

export const useNewsfeedInputs = (
  setSearchQuery: SetState<string>,
  setSearchIsActive: SetState<boolean>
) => {
  const user = useSelector((state: RootState) => state.user);

  const { handleSearchInputChange, resetSearch } = useSearchBar(
    setSearchQuery,
    setSearchIsActive
  );

  const [isAddingQuote, setIsAddingQuote] = useState(false);
  const closeQuoteModal = () => setIsAddingQuote(false);

  const { t } = useTranslation('common');

  return {
    resetSearch,
    handleSearchInputChange,
    isAddingQuote,
    setIsAddingQuote,
    closeQuoteModal,
    user,
    t,
  };
};
