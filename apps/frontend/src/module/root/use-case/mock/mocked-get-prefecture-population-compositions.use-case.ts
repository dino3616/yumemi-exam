import {
  mockedPopulationComposition1,
  mockedPopulationComposition2,
  mockedPopulationComposition3,
  mockedPopulationComposition4,
} from '@/module/root/model/mock/mocked-population-composition.model';
import { mockedPrefecture1, mockedPrefecture2 } from '@/module/root/model/mock/mocked-prefecture.model';
import type {
  GetPrefecturePopulationCompositionsInterface,
  GetPrefecturePopulationCompositionsOutput,
} from '@/module/root/use-case/get-prefecture-population-compositions.use-case';

export const getPrefecturePopulationCompositions: GetPrefecturePopulationCompositionsInterface = async () => {
  const output: GetPrefecturePopulationCompositionsOutput = [
    {
      prefecture: mockedPrefecture1,
      boundaryYear: 2015,
      populationCompositions: [mockedPopulationComposition1, mockedPopulationComposition2],
    },
    {
      prefecture: mockedPrefecture2,
      boundaryYear: 2020,
      populationCompositions: [mockedPopulationComposition3, mockedPopulationComposition4],
    },
  ];

  return output;
};
