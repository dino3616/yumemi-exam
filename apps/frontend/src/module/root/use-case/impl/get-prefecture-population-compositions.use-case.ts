import type { GetPrefecturePopulationCompositionsInterface } from '@/module/root/use-case/get-prefecture-population-compositions.use-case';

export const getPrefecturePopulationCompositions: GetPrefecturePopulationCompositionsInterface = async ({ inject }) => {
  const prefectures = await inject.getPrefectures();

  const prefecturePopulationCompositions = await Promise.all(
    prefectures.map(async (prefecture) => {
      const { boundaryYear, populationCompositions } = await inject.getPopulationComposition(prefecture);

      return { prefecture, boundaryYear, populationCompositions };
    }),
  );

  return prefecturePopulationCompositions;
};
