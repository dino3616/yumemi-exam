import { mockedPopulationComposition1 } from '@/module/root/model/mock/mocked-population-composition.model';
import { mockedPrefecture1, mockedPrefecture2, mockedPrefecture3 } from '@/module/root/model/mock/mocked-prefecture.model';
import { mockedGetPopulationComposition1 } from '@/module/root/repository/mock/mocked-get-population-composition.repository';
import { mockedGetPrefectures1 } from '@/module/root/repository/mock/mocked-get-prefectures.repository';
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
        getPopulationComposition: mockedGetPopulationComposition1,
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
          getPrefectures: mockedGetPrefectures1,
          getPopulationComposition: async () => ({
            boundaryYear: 2015,
            populationCompositions: [
              {
                ...mockedPopulationComposition1,
                label: '年少人口',
              },
            ],
          }),
        },
      }),
    ).rejects.toThrowError();
  });
});
