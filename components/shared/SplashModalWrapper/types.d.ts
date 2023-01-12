import { PropsWithChildren } from 'react';

export type PropsType = PropsWithChildren<{
  iconComponent?: JSX.Element;
  title: string;
  subtitle: string;
  headingIsBig?: boolean;
  closeModalCallback: () => void;
}>;
