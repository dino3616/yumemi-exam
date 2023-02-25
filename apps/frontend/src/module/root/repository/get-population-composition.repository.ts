import type { PopulationComposition } from '@/module/root/model/population-composition.model';
import type { Prefecture } from '@/module/root/model/prefecture.model';

export type GetPopulationCompositionOutput = {
  boundaryYear: number;
  populationCompositions: PopulationComposition[];
};

export type GetPopulationCompositionInterface = (prefecture: Prefecture) => Promise<GetPopulationCompositionOutput>;
