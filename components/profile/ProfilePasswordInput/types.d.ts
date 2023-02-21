import { ChangeEvent } from 'react';

export type PropsType = {
  name: string;
  label: string;
  placeholder: string;
  validationRules?: object;
  onChange?: (arg0: ChangeEvent<HTMLInputElement>) => void;
};
