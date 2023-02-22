import type { DefineMethods } from 'aspida';

export type Query = {
  prefCode: number;
  cityCode: number | '-';
  addArea: string;
};

export type Response = {
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  };
};

export type Methods = DefineMethods<{
  get: {
    query: Query;
    resBody: Response;
  };
}>;
