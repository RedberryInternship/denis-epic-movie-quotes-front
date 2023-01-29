export type PropsType = {
  name: string;
  type?: 'text' | 'password';
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  validationRules?: object;
  onChange?: (arg0: any) => void;
  isBig?: boolean;
};
