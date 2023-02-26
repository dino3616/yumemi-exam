import type { GetPrefecturePopulationCompositionsInterface } from '@/module/root/use-case/get-prefecture-total-population-compositions.use-case';

export const getPrefectureTotalPopulationCompositions: GetPrefecturePopulationCompositionsInterface = async ({ inject }) => {
  const prefectures = await inject.getPrefectures();

  const prefectureTotalPopulationCompositions = await Promise.all(
    prefectures.map(async (prefecture) => {
      const { boundaryYear, populationCompositions } = await inject.getPopulationComposition(prefecture);

      const totalPopulationComposition = populationCompositions.find((populationComposition) => populationComposition.label === '総人口');
      if (totalPopulationComposition === undefined) {
        throw new Error('Could not find the total population composition.');
      }

      return {
        prefecture,
        boundaryYear,
        populationComposition: totalPopulationComposition,
      };
    }),
  );

  prefectureTotalPopulationCompositions.sort((a, b) => a.prefecture.prefCode - b.prefecture.prefCode);

  return prefectureTotalPopulationCompositions;
};
