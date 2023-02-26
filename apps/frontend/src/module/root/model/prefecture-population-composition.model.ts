import type { PopulationComposition } from '@/module/root/model/population-composition.model';
import type { Prefecture } from '@/module/root/model/prefecture.model';

export type PrefecturePopulationComposition = {
  prefecture: Prefecture;
  boundaryYear: number;
  populationComposition: PopulationComposition;
};
