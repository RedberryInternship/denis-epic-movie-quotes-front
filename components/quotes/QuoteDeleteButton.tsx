import { Bin } from 'components';
import { useTranslation } from 'next-i18next';

const QuoteDeleteButton = (props: { onClick: () => void }) => {
  const { t } = useTranslation('common');

  return (
    <button className='opacity-80 p-1' onClick={props.onClick}>
      <div className='flex items-center gap-2 hover:text-brand-crimson text-brand-pale hover:scale-105 transition'>
        <Bin />
        <span className='hidden lg:inline'>{t('delete')}</span>
      </div>
    </button>
  );
};

export default QuoteDeleteButton;
