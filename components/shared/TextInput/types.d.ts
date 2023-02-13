export type PropsType = {
  name: string;
  type?: 'text' | 'password';
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  onChange?: (arg0: any) => void;
  isBig?: boolean;
};
