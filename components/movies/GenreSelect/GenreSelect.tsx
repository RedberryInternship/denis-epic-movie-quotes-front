import { Genre } from 'types';
import { useGenreSelect } from './useGenreSelect';
import { SelectInput } from 'components';

const GenreSelect = (props: { genres: Genre[] }) => {
  const { genres } = useGenreSelect(props.genres);

  return (
    <SelectInput
      name='genres'
      options={genres}
      placeholder='Select genres...'
      noOptionsMessageCallback={() => <div>No more genres!</div>}
      isMulti={true}
    />
  );
};

export default GenreSelect;
