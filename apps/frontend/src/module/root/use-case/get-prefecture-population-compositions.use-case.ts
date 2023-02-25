import type { PopulationComposition } from '@/module/root/model/population-composition.model';
import type { Prefecture } from '@/module/root/model/prefecture.model';
import type { GetPopulationCompositionInterface } from '@/module/root/repository/get-population-composition.repository';
import type { GetPrefecturesInterface } from '@/module/root/repository/get-prefectures.repository';

export type GetPrefecturePopulationCompositionsInput = {
  inject: {
    getPrefectures: GetPrefecturesInterface;
    getPopulationComposition: GetPopulationCompositionInterface;
  };
};

export type GetPrefecturePopulationCompositionsOutput = {
  prefecture: Prefecture;
  boundaryYear: number;
  populationCompositions: PopulationComposition[];
}[];

export type GetPrefecturePopulationCompositionsInterface = (
  input: GetPrefecturePopulationCompositionsInput,
) => Promise<GetPrefecturePopulationCompositionsOutput>;
