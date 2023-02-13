import { ChangeEvent } from 'react';

export type PropsType = {
  name: string;
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  onChange?: (arg0: ChangeEvent<HTMLInputElement>) => void;
  isHidden: boolean;
  toggleIsHidden: () => void;
  isBig?: true;
};
