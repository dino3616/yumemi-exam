import type { DefineMethods } from 'aspida';

export type Response = {
  result: {
    prefCode: number;
    prefName: string;
  };
};

export type Methods = DefineMethods<{
  get: {
    resBody: Response;
  };
}>;
