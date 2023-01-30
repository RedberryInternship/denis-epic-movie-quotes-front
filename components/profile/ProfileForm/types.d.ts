import { SetState, User } from 'types';

export type PropsType = {
  user: User;
  setUsernameModalIsOpen: SetState<boolean>;
  setPasswordModalIsOpen: SetState<boolean>;
};
