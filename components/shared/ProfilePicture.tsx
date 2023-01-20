import Image from 'next/image';

const ProfilePicture = (props: {
  size: number;
  image: string | null;
  classNames?: string;
}) => {
  return (
    <Image
      src={props.image || '/assets/default_profile_picture.png'}
      alt=''
      className={
        'rounded-full object-cover ' +
        (props.classNames ? props.classNames : 'w-10 h-10 lg:w-13 lg:h-13')
      }
      width={props.size}
      height={props.size}
    />
  );
};

export default ProfilePicture;
