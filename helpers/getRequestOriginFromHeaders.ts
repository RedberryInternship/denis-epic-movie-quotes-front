import { IncomingHttpHeaders } from 'http';

export const getRequestOriginFromHeaders = (headers: IncomingHttpHeaders) => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_ORIGIN;
  }
  return `${headers['x-forwarded-proto'] || 'http'}://${headers.host}`;
};
