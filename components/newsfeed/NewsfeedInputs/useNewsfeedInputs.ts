import { ChangeEvent } from 'react';
import { debounce } from 'helpers';
import { SetState } from 'types';

export const useNewsfeedInputs = (
  setSearchQuery: SetState<string>,
  setSearchIsActive: SetState<boolean>
) => {
  const _handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchInputChange = debounce(_handleSearchInputChange, 500);

  const resetSearch = () => {
    setSearchQuery('');
    setSearchIsActive(false);
  };

  return { resetSearch, handleSearchInputChange };
};
