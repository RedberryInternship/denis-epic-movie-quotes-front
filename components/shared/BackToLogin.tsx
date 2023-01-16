import { Modals, SetState } from 'types';
import { ArrowLeft } from 'components';
import { useTranslation } from 'next-i18next';

const BackToLogin = (props: { setActiveModal: SetState<Modals> }) => {
  const { t } = useTranslation('auth');

  return (
    <button
      type='button'
      className='mt-6 flex gap-3 items-center text-brand-subtitle'
      onClick={() => props.setActiveModal('login')}
    >
      <ArrowLeft /> {t('back_to_login')}
    </button>
  );
};

export default BackToLogin;
