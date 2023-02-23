import type { Query, Response } from '../api/v1/population/composition/perYear';
import { client } from '../infra/client.factory';

export const getPopulationComposition = async (query: Query): Promise<Response> => {
  const response = await client.v1.population.composition.perYear.$get({ query });

  return response;
};
