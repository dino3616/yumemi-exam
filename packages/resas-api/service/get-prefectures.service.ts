import type { Response } from '../api/v1/prefectures';
import { client } from '../infra/client.factory';

export const getPrefectures = async (): Promise<Response> => {
  const response = await client.v1.prefectures.$get({ config: {} });

  return response;
};
