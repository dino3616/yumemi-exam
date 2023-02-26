import { mockedPopulation1, mockedPopulation2, mockedPopulation3 } from '@/module/root/model/mock/mocked-population.model';
import { mockedPrefecture1, mockedPrefecture2, mockedPrefecture3 } from '@/module/root/model/mock/mocked-prefecture.model';
import { getPrefectureTotalPopulationCompositions } from '@/module/root/use-case/impl/get-prefecture-total-population-compositions.use-case';

describe('getPrefectureTotalPopulationCompositions', () => {
  test('prefectureTotalPopulationCompositions is sorted in ascending order by own prefecture.prefCode.', async () => {
    const prefectureTotalPopulationCompositions = await getPrefectureTotalPopulationCompositions({
      inject: {
        getPrefectures: async () => [
          { ...mockedPrefecture1, prefCode: 2 },
          { ...mockedPrefecture2, prefCode: 3 },
          { ...mockedPrefecture3, prefCode: 1 },
        ],
        getPopulationComposition: async () => ({
          boundaryYear: 2015,
          populationCompositions: [
            {
              label: '総人口',
              data: [mockedPopulation1, mockedPopulation2, mockedPopulation3],
            },
          ],
        }),
      },
    });

    expect(
      prefectureTotalPopulationCompositions.map((prefectureTotalPopulationComposition) => prefectureTotalPopulationComposition.prefecture.prefCode),
    ).toEqual([1, 2, 3]);
  });

  test('Throws an error if populationCompositions does not have populationComposition.label as the total population.', async () => {
    expect(
      getPrefectureTotalPopulationCompositions({
        inject: {
          getPrefectures: async () => [
            { ...mockedPrefecture1, prefCode: 2 },
            { ...mockedPrefecture2, prefCode: 3 },
            { ...mockedPrefecture3, prefCode: 1 },
          ],
          getPopulationComposition: async () => ({
            boundaryYear: 2015,
            populationCompositions: [
              {
                label: '年少人口',
                data: [mockedPopulation1, mockedPopulation2, mockedPopulation3],
              },
            ],
          }),
        },
      }),
    ).rejects.toThrowError();
  });
});
