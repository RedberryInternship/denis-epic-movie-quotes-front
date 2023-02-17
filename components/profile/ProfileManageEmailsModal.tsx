import { Email, SetState } from 'types';
import { EmailSideButtons, EmailStatusIcon, PlusButton } from 'components';

const ProfileManageEmailsModal = (props: {
  emails: Email[];
  setIsAddingEmail: SetState<boolean>;
}) => {
  return (
    <div className='lg:hidden absolute pt-40 min-h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] w-full rounded text-white pointer-events-none flex items-stretch z-20'>
      <div className='bg-brand-lightbackground w-full'>
        <div className='max-h-full overflow-y-scroll bg-brand-lightmodal p-8 pointer-events-auto'>
          <div className='uppercase mb-6 text-sm'>Primary Email</div>
          <div className='relative text-xl h-12 border-1.5 border-brand-green bg-[#19875432] rounded flex items-center px-4.5'>
            {(props.emails.find((email) => email.isPrimary) as Email).address}
            <EmailStatusIcon isPrimary={true} isVerified={true} />
          </div>
          <hr className='mt-6 mb-8 border-brand-divide' />
          {props.emails
            .filter((email) => !email.isPrimary)
            .map((email, index) => {
              return (
                <div key={index}>
                  <div className='text-xl'>{email.address}</div>
                  <EmailSideButtons
                    email={email}
                    isPrimary={false}
                    isVerified={email.isVerified}
                  />
                  <hr className='mt-6 mb-8 border-brand-divide' />
                </div>
              );
            })}
          <div className='uppercase mb-6 text-sm'>Add new Email</div>
          <button
            className='w-full h-9.5 rounded flex items-center justify-center gap-2 border-1.5 border-brand-lightgray'
            type='button'
            onClick={() => props.setIsAddingEmail(true)}
          >
            <PlusButton />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileManageEmailsModal;
