import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';
import type { GetPopulationCompositionInterface } from '@/module/root/repository/get-population-composition.repository';
import type { GetPrefecturesInterface } from '@/module/root/repository/get-prefectures.repository';

export type GetPrefecturePopulationCompositionsInput = {
  inject: {
    getPrefectures: GetPrefecturesInterface;
    getPopulationComposition: GetPopulationCompositionInterface;
  };
};

export type GetPrefecturePopulationCompositionsOutput = PrefecturePopulationComposition[];

export type GetPrefecturePopulationCompositionsInterface = (
  input: GetPrefecturePopulationCompositionsInput,
) => Promise<GetPrefecturePopulationCompositionsOutput>;
