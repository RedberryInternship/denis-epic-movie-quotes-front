import { Email, SetState } from 'types';
import {
  EmailSideButtons,
  EmailStatusIcon,
  PlusButton,
  ProfileInput,
} from 'components';

const ProfileEmailSection = (props: {
  emails: Email[];
  setIsAddingEmail: SetState<boolean>;
}) => {
  return (
    <div className='hidden lg:block'>
      <div>
        {props.emails.map((email, index) => {
          return (
            <ProfileInput
              key={index}
              label='Email'
              value={email.address}
              name={`email_${index}`}
              isActive={false}
              sideButtons={
                <EmailSideButtons
                  emailID={email.id}
                  isPrimary={email.isPrimary}
                  isVerified={email.isVerified}
                />
              }
              additionalClassNames={
                email.isPrimary
                  ? 'disabled:border-1.5 border-brand-green disabled:lg:text-white lg:disabled:!bg-[#19875432]'
                  : !email.isVerified
                  ? 'disabled:border-1.5 border-brand-yellow disabled:lg:text-white lg:disabled:!bg-[#EC952432]'
                  : ''
              }
            >
              <EmailStatusIcon
                isPrimary={email.isPrimary}
                isVerified={email.isVerified}
              />
            </ProfileInput>
          );
        })}
      </div>
      <button
        className='px-4.5 h-12 rounded flex items-center justify-center gap-2 border-1.5 border-brand-lightgray'
        type='button'
        onClick={() => props.setIsAddingEmail(true)}
      >
        <PlusButton />
        Add new email
      </button>
    </div>
  );
};

export default ProfileEmailSection;
