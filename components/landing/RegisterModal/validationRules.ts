export const validationRules = {
  username: {
    required: 'Please enter a username',
    minLength: {
      value: 3,
      message: 'This field should contain at least 3 characters',
    },
    maxLength: {
      value: 15,
      message: 'This field should contain less than 16 characters',
    },
    pattern: {
      value: /^[a-z0-9_\-]+$/,
      message: 'The username can only contain lowercase characters and numbers',
    },
  },
  email: {
    required: 'Please enter an email',
    pattern: {
      value: /^(.+)@(.+)$/,
      message: 'Please enter a valid email address',
    },
  },
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
