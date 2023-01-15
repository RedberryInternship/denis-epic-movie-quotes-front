export const validationRules = {
  password: {
    required: 'Please enter a password',
    minLength: {
      value: 8,
      message: 'The password should contain at least 8 characters',
    },
    maxLength: {
      value: 15,
      message: 'This field should contain less than 16 characters',
    },
    pattern: {
      value: /^[a-z0-9_\-]+$/,
      message: 'The password can only contain lowercase characters and numbers',
    },
  },
  password_confirmation: {
    required: 'Please confirm your password',
    validate: () => {},
  },
};
