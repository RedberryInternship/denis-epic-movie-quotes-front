import { ProfilePicture } from './index';
import { Comment } from 'types';

const NewsfeedComment = (props: Comment) => {
  return (
    <>
      <div className='flex items-center gap-4 mt-4 mb-3 lg:mt-6 lg:gap-6'>
        <ProfilePicture size={52} image={props.user.profile_picture} />
        {props.user.username}
      </div>
      <div className='lg:ml-19'>
        {props.body}
        <hr className='mt-6 border-brand-divide w-full' />
      </div>
    </>
  );
};

export default NewsfeedComment;
