import { SetState, User } from 'types';
import { PropsWithChildren } from 'react';

export type PropsType = PropsWithChildren<{
  user: User;
  searchBarProps?: {
    searchIsActive: boolean;
    setSearchIsActive: SetState<boolean>;
    searchQuery: string;
    setSearchQuery: SetState<string>;
  };
}>;
