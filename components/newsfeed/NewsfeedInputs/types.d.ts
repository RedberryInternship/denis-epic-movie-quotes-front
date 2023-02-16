import { SetState } from 'types';

export type PropsType = {
  searchIsActive: boolean;
  setSearchIsActive: SetState<boolean>;
  searchQuery: string;
  setSearchQuery: SetState<string>;
};
