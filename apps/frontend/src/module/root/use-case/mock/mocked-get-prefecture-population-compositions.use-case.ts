import {
  mockedPrefecturePopulationComposition1,
  mockedPrefecturePopulationComposition2,
} from '@/module/root/model/mock/mocked-prefecture-population-composition.model';
import type {
  GetPrefecturePopulationCompositionsInterface,
  GetPrefecturePopulationCompositionsOutput,
} from '@/module/root/use-case/get-prefecture-population-compositions.use-case';

export const getPrefecturePopulationCompositions: GetPrefecturePopulationCompositionsInterface = async () => {
  const output: GetPrefecturePopulationCompositionsOutput = [mockedPrefecturePopulationComposition1, mockedPrefecturePopulationComposition2];

  return output;
};
