import Select from 'react-select';
import { getStyles, theme } from './styles';
import { Controller } from 'react-hook-form';
import { Genre } from 'types';
import { useGenreSelect } from './useGenreSelect';

const GenreSelect = (props: { genres: Genre[] }) => {
  const { genres, hasErrors } = useGenreSelect(props.genres);

  return (
    <div className='mb-4'>
      <Controller
        name='genres'
        rules={{ required: true }}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            isMulti
            ref={ref}
            name={name}
            value={value ?? []}
            options={genres}
            onChange={onChange}
            instanceId='genres-dropdown'
            classNamePrefix='select'
            isSearchable={false}
            placeholder='Select genres...'
            noOptionsMessage={() => <div>No more genres!</div>}
            theme={theme}
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
            styles={getStyles(!hasErrors)}
          />
        )}
      />
    </div>
  );
};

export default GenreSelect;
