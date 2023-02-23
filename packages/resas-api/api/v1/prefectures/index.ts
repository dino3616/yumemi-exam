import type { DefineMethods } from 'aspida';
import type { Prefecture } from '../../../model/prefecture.model';

export type Response = {
  result: Prefecture[];
};

export type Methods = DefineMethods<{
  get: {
    resBody: Response;
  };
}>;
