import { GreenCheckmark, InfoCircle } from 'components';
import { useTranslation } from 'next-i18next';

const EmailStatusIcon = (props: {
  isPrimary: boolean;
  isVerified: boolean;
}) => {
  const { t } = useTranslation('profile');

  return (
    <div className='absolute top-0 h-full right-3 lg:right-5 flex items-center'>
      {props.isPrimary && <GreenCheckmark />}
      {!props.isVerified && (
        <>
          <div className='relative group text-brand-yellow'>
            <span className='flex w-3.5 h-3.5'>
              <InfoCircle />
            </span>

            <div className='hidden group-hover:lg:block -top-6 absolute rounded-sm border-x-[10px] border-x-transparent border-t-[20px] border-t-white w-5 -translate-x-1/4'></div>
            <div className='hidden group-hover:lg:flex absolute gap-2 items-center text-black -top-20 text-center bg-white rounded px-4 min-w-[300px] w-max h-16 py-2 -translate-x-1/2'>
              <span className='text-[#485563] w-5 h-5'>
                <InfoCircle />
              </span>
              {t('verify_hint')}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailStatusIcon;
