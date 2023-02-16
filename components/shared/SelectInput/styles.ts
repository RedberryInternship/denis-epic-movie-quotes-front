import { CSSObjectWithLabel, Theme } from 'react-select';

export const theme = (theme: Theme) => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    primary25: '#DC3545',
    primary: '#A9B4BE',
    neutral0: '#11101A',
    neutral20: '#6C757D',
  },
});

export const getStyles = (isValid: boolean, isMulti: boolean | undefined) => ({
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    borderColor: isValid ? '#6C757D' : '#E31221',
    borderWidth: isValid ? '1px' : '1.5px',
    minHeight: isMulti ? '3rem' : '5.125rem',
    backgroundColor: 'transparent',
  }),
  container: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    minHeight: isMulti ? '3rem' : '5.125rem',
  }),
  indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    paddingRight: isMulti ? '1rem' : '1.75rem',
  }),
  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    padding: '0.625rem 1.0625rem',
    minHeight: isMulti ? '3rem' : '5.125rem',
  }),
  multiValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    minWidth: '4.375rem',
    minHeight: '1.625rem',
    backgroundColor: '#6C757D',
  }),
  multiValueLabel: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: '#FFFFFF',
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    paddingTop: '0',
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: '#24222F',
    borderRadius: '0.25rem',
  }),
  option: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    borderRadius: '0.25rem',
  }),
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: '#6C757D',
    margin: 0,
  }),
});
