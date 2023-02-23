import type { DefineMethods } from 'aspida';
import type { PopulationComposition } from '../../../../../model/population-composition.model';

export type Query = {
  prefCode: number;
  cityCode: number | '-';
  addArea?: string;
};

export type Response = {
  result: {
    boundaryYear: number;
    data: PopulationComposition[];
  };
};

export type Methods = DefineMethods<{
  get: {
    query: Query;
    resBody: Response;
  };
}>;
