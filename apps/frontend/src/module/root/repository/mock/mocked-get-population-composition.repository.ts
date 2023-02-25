import {
  mockedPopulationComposition1,
  mockedPopulationComposition2,
  mockedPopulationComposition3,
} from '@/module/root/model/mock/mocked-population-composition.model';
import type {
  GetPopulationCompositionInterface,
  GetPopulationCompositionOutput,
} from '@/module/root/repository/get-population-composition.repository';

export const mockedGetPopulationComposition1: GetPopulationCompositionInterface = async () => {
  const output: GetPopulationCompositionOutput = {
    boundaryYear: 2020,
    populationCompositions: [mockedPopulationComposition1, mockedPopulationComposition2, mockedPopulationComposition3],
  };

  return output;
};
