import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';

export const mockedPrefecturePopulationComposition1: PrefecturePopulationComposition = {
  prefecture: {
    prefCode: 1,
    prefName: '北海道',
  },
  boundaryYear: 2015,
  populationComposition: {
    label: '総人口',
    data: [
      {
        year: 2010,
        value: 100,
      },
      {
        year: 2015,
        value: 200,
      },
      {
        year: 2020,
        value: 300,
      },
    ],
  },
};

export const mockedPrefecturePopulationComposition2: PrefecturePopulationComposition = {
  prefecture: {
    prefCode: 2,
    prefName: '青森県',
  },
  boundaryYear: 2015,
  populationComposition: {
    label: '総人口',
    data: [
      {
        year: 2010,
        value: 100,
      },
      {
        year: 2015,
        value: 200,
      },
      {
        year: 2020,
        value: 300,
      },
    ],
  },
};

export const mockedPrefecturePopulationComposition3: PrefecturePopulationComposition = {
  prefecture: {
    prefCode: 3,
    prefName: '岩手県',
  },
  boundaryYear: 2015,
  populationComposition: {
    label: '総人口',
    data: [
      {
        year: 2010,
        value: 100,
      },
      {
        year: 2015,
        value: 200,
      },
      {
        year: 2020,
        value: 300,
      },
    ],
  },
};
