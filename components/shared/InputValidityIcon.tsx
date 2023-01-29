import { InputIconWrapper, Invalid, Valid } from 'components';

const InputValidityIcon = (props: { isValid: boolean; isInvalid: boolean }) => {
  return (
    <>
      {props.isValid && (
        <InputIconWrapper>
          <Valid />
        </InputIconWrapper>
      )}
      {props.isInvalid && (
        <InputIconWrapper>
          <Invalid />
        </InputIconWrapper>
      )}
    </>
  );
};

export default InputValidityIcon;
