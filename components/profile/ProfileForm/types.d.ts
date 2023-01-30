import { SetState, User } from 'types';

export type PropsType = {
  user: User;
  isManagingEmails: boolean;
  setUsernameModalIsOpen: SetState<boolean>;
  setPasswordModalIsOpen: SetState<boolean>;
  setIsManagingEmails: SetState<boolean>;
  setIsAddingEmail: SetState<boolean>;
};
