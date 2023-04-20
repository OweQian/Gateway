import { join } from 'path';
import { fastLogger } from './logger';

const logOpt = {
  console: process.env.NODE_ENV !== 'production',
  level: 'info',
  serializers: {
    req: (req) => ({
      method: req?.method,
      url: req?.url,
    }),
  },
  fileName: join(process.cwd(), 'logs/fast-gateway.log'),
  maxBufferLength: 4096,
  flushInterval: 1000,
  logRotator: {
    byHour: true,
    byDay: false,
    hourDelimiter: '_',
  },
};

export const FastifyLogger = fastLogger(logOpt);
