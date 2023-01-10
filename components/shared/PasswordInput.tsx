import { PasswordEye, PasswordEyeCrossed, TextInput } from 'components';

const PasswordInput = (props: {
  name: string;
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  validationRules?: object;
  onChange?: (arg0: any) => void;
  isHidden: boolean;
  toggleIsHidden: () => void;
}) => {
  return (
    <div className='relative w-full'>
      <TextInput {...props} type={props.isHidden ? 'password' : 'text'} />
      <button
        className='absolute top-8 right-12 h-9.5 lg:right-12 flex items-center'
        onClick={props.toggleIsHidden}
      >
        {props.isHidden ? <PasswordEyeCrossed /> : <PasswordEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
