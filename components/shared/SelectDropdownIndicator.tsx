import { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIcon } from 'components';

const SelectDropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

export default SelectDropdownIndicator;
