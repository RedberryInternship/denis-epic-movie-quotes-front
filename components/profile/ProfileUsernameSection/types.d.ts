import { SetState } from 'types';

export type PropsType = {
  isEditingUsername: boolean;
  setIsEditingUsername: SetState<boolean>;
  setUsernameModalIsOpen: SetState<boolean>;
  username: string;
};
