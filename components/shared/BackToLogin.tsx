import { Modals, SetState } from '../../types';
import { ArrowLeft } from '../icons';

const BackToLogin = (props: { setActiveModal: SetState<Modals> }) => {
  return (
    <button
      type='button'
      className='mt-6 flex gap-3 items-center text-brand-subtitle'
      onClick={() => props.setActiveModal('login')}
    >
      <ArrowLeft /> Back to log in
    </button>
  );
};

export default BackToLogin;
