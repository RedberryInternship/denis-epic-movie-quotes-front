import { Google } from 'components';

const GoogleAuthButton = (props: { label: string }) => {
  return (
    <button
      type='button'
      className='w-full border border-1.5 border-brand-pale h-9.5 rounded flex justify-center items-center'
    >
      <Google /> <span className='ml-2 pb-1'>{props.label}</span>
    </button>
  );
};

export default GoogleAuthButton;
