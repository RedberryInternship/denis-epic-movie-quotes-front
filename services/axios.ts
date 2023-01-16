import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';
import { i18n } from 'next-i18next';
import i18nextConfig from '../next-i18next.config';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.defaults.withCredentials = true;

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers as AxiosHeaders).set(
    'Accept-Language',
    i18n?.language ?? i18nextConfig.i18n.defaultLocale
  );
  return config;
});

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (!response.data) return { success: true };
    response.data.success = true;
    return response.data;
  },

  async (error) => {
    if (!error.response) {
      return Promise.reject({
        success: false,
        message: 'Failed to connect. Please try again',
      });
    }
    error.response.data.success = false;
    return Promise.reject(error.response.data);
  }
);

export default instance;
