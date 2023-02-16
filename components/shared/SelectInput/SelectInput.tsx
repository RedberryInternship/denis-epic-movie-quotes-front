import Select from 'react-select';
import { getStyles, theme } from './styles';
import { Controller, useFormState } from 'react-hook-form';
import { PropsType } from './types';
import { SelectDropdownIndicator } from 'components';

const SelectInput = (props: PropsType) => {
  const { errors } = useFormState();

  return (
    <div className='mb-4'>
      <Controller
        name={props.name}
        rules={{ required: true }}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            isMulti={props.isMulti}
            ref={ref}
            name={name}
            components={{ DropdownIndicator: SelectDropdownIndicator }}
            value={value ?? []}
            options={props.options}
            onChange={onChange}
            instanceId={`${props.name}-dropdown`}
            classNamePrefix='select'
            isSearchable={false}
            placeholder={props.placeholder}
            noOptionsMessage={props.noOptionsMessageCallback}
            theme={theme}
            closeMenuOnSelect={!props.isMulti}
            blurInputOnSelect={!props.isMulti}
            styles={getStyles(!errors[props.name], props.isMulti)}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;
