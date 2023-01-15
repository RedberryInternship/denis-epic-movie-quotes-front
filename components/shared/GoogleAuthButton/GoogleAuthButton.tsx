import { Google } from 'components';
import { useGoogleAuthButton } from './useGoogleAuthButton';

const GoogleAuthButton = (props: { label: string }) => {
  const redirectToOAuth = useGoogleAuthButton();

  return (
    <button
      type='button'
      className='w-full border border-1.5 border-brand-pale h-9.5 rounded flex justify-center items-center'
      onClick={redirectToOAuth}
    >
      <Google /> <span className='ml-2 pb-1'>{props.label}</span>
    </button>
  );
};

export default GoogleAuthButton;
