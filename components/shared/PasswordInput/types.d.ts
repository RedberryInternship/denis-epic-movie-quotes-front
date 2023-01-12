export type PropsType = {
  name: string;
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  validationRules?: object;
  onChange?: (arg0: any) => void;
  isHidden: boolean;
  toggleIsHidden: () => void;
};
