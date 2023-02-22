import aspida from '@aspida/node-fetch';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import api from './api/$api';
import type { Query as GetPopulationCompositionQuery, Response as GetPopulationCompositionResponse } from './api/v1/population/composition/perYear';
import type { Response as GetPrefecturesResponse } from './api/v1/prefectures';

dotenv.config();

const client = api(
  aspida(fetch, {
    baseURL: process.env['RESAS_API_URL'],
    throwHttpErrors: true,
  }),
);

const getPrefectures = async (): Promise<GetPrefecturesResponse> => {
  const response = await client.v1.prefectures.$get();

  return response;
};

const getPopulationComposition = async (query: GetPopulationCompositionQuery): Promise<GetPopulationCompositionResponse> => {
  const response = await client.v1.population.composition.perYear.$get({
    query,
  });

  return response;
};

export const resasClient = { getPrefectures, getPopulationComposition };
