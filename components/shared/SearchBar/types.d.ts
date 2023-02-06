import { SetState } from 'types';
import { ChangeEvent } from 'react';

export type PropsType = {
  searchIsActive: boolean;
  setSearchIsActive: SetState<boolean>;
  searchQuery: string;
  placeholder: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetSearch: () => void;
};
