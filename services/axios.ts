import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.defaults.withCredentials = true;

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (!response.data) return { success: true };
    response.data.success = true;
    return response.data;
  },

  async (error) => {
    error.response.data.success = false;
    return Promise.reject(error.response.data);
  }
);

export default instance;
