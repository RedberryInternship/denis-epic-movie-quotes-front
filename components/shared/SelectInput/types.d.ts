export type PropsType = {
  name: string;
  options: { label: string; value: number; id: number }[] | undefined;
  placeholder: string;
  noOptionsMessageCallback: () => JSX.Element;
  isMulti?: boolean;
};
