import { resasClient } from '@yumemi-exam/resas-api';
import type { GetPopulationCompositionInterface } from '@/module/root/repository/get-population-composition.repository';

export const getPopulationComposition: GetPopulationCompositionInterface = async (prefecture) => {
  const {
    result: { boundaryYear, data: populationCompositions },
  } = await resasClient.getPopulationComposition({
    prefCode: prefecture.prefCode,
    cityCode: '-',
  });

  return { boundaryYear, populationCompositions };
};
