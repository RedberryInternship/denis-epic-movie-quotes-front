import axios from './axios';
import { ApiDataResponse, Notification } from 'types';

export const getNotifications = async () => {
  return (await axios.get('/api/notification')) as ApiDataResponse<
    Notification[]
  >;
};

export const markNotificationAsSeen = async (id: number) => {
  return (await axios.put(`/api/notification/${id}`)) as Notification;
};

export const markAllNotificationsAsSeen = async () => {
  return await axios.post(`/api/notification/mark-all-read`);
};
