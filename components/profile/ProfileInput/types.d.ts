import { ChangeEvent, PropsWithChildren, ReactNode } from 'react';

export type PropsType = PropsWithChildren<{
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  isActive: boolean;
  onChange?: (arg0: ChangeEvent<HTMLInputElement>) => void;
  validationRules?: object;
  type?: 'text' | 'password' | 'email';
  sideButtons?: ReactNode;
  additionalClassNames?: string;
}>;
