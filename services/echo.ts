import Echo from 'laravel-echo';
import Pusher, { Channel } from 'pusher-js';
import axios from './axios';

let echo: Echo | null = null;

declare global {
  interface Window {
    Pusher: typeof Pusher;
  }
}

if (typeof window !== 'undefined') {
  window.Pusher = Pusher;

  echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    encrypted: true,
    authorizer: (channel: Channel) => {
      return {
        authorize: async (
          socketId: string,
          callback: (error: object | null, data?: object) => void
        ) => {
          axios
            .post('/broadcasting/auth', {
              socket_id: socketId,
              channel_name: channel.name,
            })
            .then((response) => {
              callback(null, response);
            })
            .catch((error) => {
              callback(error);
            });
        },
      };
    },
  });
}

export { echo };
