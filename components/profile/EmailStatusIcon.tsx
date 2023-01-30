import { GreenCheckmark, InfoCircle } from 'components';

const EmailStatusIcon = (props: {
  isPrimary: boolean;
  isVerified: boolean;
}) => {
  return (
    <div className='absolute top-0 h-full right-3 lg:right-5 flex items-center'>
      {props.isPrimary && <GreenCheckmark />}
      {!props.isVerified && <InfoCircle />}
    </div>
  );
};

export default EmailStatusIcon;
