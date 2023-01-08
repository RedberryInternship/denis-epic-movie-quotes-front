import axios from './axios';
import { ApiResponse, LoginForm, RegisterForm } from 'types';

export const fetchCSRFToken = async () => {
  return await axios.get('/sanctum/csrf-cookie');
};

export const postLoginData = async (formValues: LoginForm) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/login', {
      username: formValues.username,
      password: formValues.password,
      remember_me: formValues.remember_me,
    })) as ApiResponse<LoginForm>;
  } catch (error) {
    return error;
  }
};

export const postRegisterData = async (formValues: RegisterForm) => {
  try {
    await fetchCSRFToken();
    return (await axios.post('/api/register', {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
    })) as ApiResponse<RegisterForm>;
  } catch (error) {
    return error;
  }
};

export const verifyEmail = async (url: string) => {
  try {
    return await axios.get(url, {
      baseURL: '',
    });
  } catch (error) {
    return error;
  }
};
