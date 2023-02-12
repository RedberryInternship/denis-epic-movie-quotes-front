import { AddEmailForm, ProfileForm, UserFromDatabase } from 'types';
import axios from './axios';
import FormData from 'form-data';

export const getUser = async (
  cookies?: string,
  origin?: string
): Promise<UserFromDatabase> => {
  return await axios.get('/api/user', {
    headers: {
      origin: origin,
      Cookie: cookies,
    },
  });
};

export const sendAddEmailRequest = async (formValues: AddEmailForm) => {
  try {
    return await axios.post('/api/emails', {
      email: formValues.email,
    });
  } catch (error) {
    return error;
  }
};

export const sendMakeEmailPrimaryRequest = async (id: number) => {
  try {
    return await axios.post(`/api/emails/make-primary/${id}`);
  } catch (error) {
    return error;
  }
};

export const sendDeleteEmailRequest = async (id: number) => {
  try {
    return await axios.delete(`/api/emails/${id}`);
  } catch (error) {
    return error;
  }
};

export const sendUpdateProfileRequest = async (formFields: ProfileForm) => {
  try {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    for (const [key, value] of Object.entries(formFields)) {
      if (key === 'image') {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }
    return await axios.post(`/api/profile`, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error;
  }
};
