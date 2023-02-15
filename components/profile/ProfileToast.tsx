import toast, { CheckmarkIcon, Toast } from 'react-hot-toast';
import { Close } from 'components';

const ProfileToast = (props: {
  toast: Toast;
  message: string;
  title?: string;
}) => {
  return (
    <div
      className={`${props.toast.visible ? 'animate-grow' : 'animate-shrink'} ${
        props.title ? 'min-h-[8.125rem]' : 'min-h-[3.75rem]'
      } relative pointer-events-auto py-2 pr-10 rounded w-full bg-brand-lightgreen border border-[#BADBCC] flex items-center px-4 gap-2 lg:w-[25rem] lg:ml-auto`}
    >
      <div
        className={`${
          props.title ? 'flex absolute' : ''
        } items-center gap-2 top-4`}
      >
        <CheckmarkIcon style={{ background: '#0F5132' }} />
        <div className='text-[#0F5132]'>{props.title}</div>
      </div>
      <div className={props.title ? 'ml-6' : ''}>{props.message}</div>
      <button
        onClick={() => toast.dismiss(props.toast.id)}
        className='absolute top-3 right-3 p-2 text-[#68736E]'
      >
        <Close />
      </button>
    </div>
  );
};

export default ProfileToast;
