import { ProfilePicture } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const SelfProfilePicture = (props: { size: number; classNames?: string }) => {
  const { profilePicture } = useSelector((state: RootState) => state.user);
  return <ProfilePicture {...props} image={profilePicture} />;
};

export default SelfProfilePicture;
