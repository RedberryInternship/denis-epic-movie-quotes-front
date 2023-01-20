import { IncomingHttpHeaders } from 'http';

export const getRequestOriginFromHeaders = (headers: IncomingHttpHeaders) => {
  return `${headers['x-forwarded-proto'] || 'http'}://${headers.host}`;
};
