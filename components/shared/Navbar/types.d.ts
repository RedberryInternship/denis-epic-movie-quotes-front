import { SetState } from 'types';

export type PropsType = {
  toggleSideMenuIsOpen: () => void;
  searchBarProps?: {
    searchIsActive: boolean;
    setSearchIsActive: SetState<boolean>;
    searchQuery: string;
    setSearchQuery: SetState<string>;
  };
};
