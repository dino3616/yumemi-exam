import aspida from '@aspida/fetch';
import * as dotenv from 'dotenv';
import api from '../api/$api';

dotenv.config();

export const client = api(
  aspida(fetch, {
    baseURL: process.env['RESAS_API_URL'],
    headers: {
      'X-API-KEY': process.env['RESAS_API_KEY'] || '',
    },
    throwHttpErrors: true,
  }),
);
