import { usePasswordHint } from './usePasswordHint';

const PasswordHint = () => {
  const { passwordMinLengthValid, passwordMaxLengthValid, t } =
    usePasswordHint();

  return (
    <div className='h-[134px] bg-brand-article p-6 border-[#373741] rounded border mb-8 lg:mb-4 lg:w-1/2 lg:max-w-[528px] mt-2'>
      {t('password_should_contain')}:
      <div
        className={
          'text-sm mt-4 mb-1 ' +
          (passwordMinLengthValid ? 'text-white' : 'text-[#9C9A9A]')
        }
      >
        <span
          className={
            'mr-1.5 ' +
            (passwordMinLengthValid ? 'text-brand-green' : 'text-[#9C9A9A]')
          }
        >
          •
        </span>
        {t('min_8')}
      </div>
      <div
        className={
          'text-sm ' +
          (passwordMaxLengthValid ? 'text-white' : 'text-[#9C9A9A]')
        }
      >
        <span
          className={
            'mr-1.5 ' +
            (passwordMaxLengthValid ? 'text-brand-green' : 'text-[#9C9A9A]')
          }
        >
          •
        </span>
        {t('max_15')}
      </div>
    </div>
  );
};

export default PasswordHint;
