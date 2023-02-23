import { resasClient } from '@yumemi-exam/resas-api';
import type { Prefecture, PopulationComposition } from '@yumemi-exam/resas-api/model';
import type { GetStaticProps, NextPage } from 'next';

type RootPageProps = {
  prefecturePopulationCompositions: {
    prefecture: Prefecture;
    boundaryYear: number;
    populationCompositions: PopulationComposition[];
  }[];
};

const RootPage: NextPage<RootPageProps> = () => <h1 className="text-primary">Hello, yumemi-exam World!</h1>;

export const getStaticProps: GetStaticProps<RootPageProps> = async () => {
  const { result: prefectures } = await resasClient.getPrefectures();

  const prefecturePopulationCompositions = await Promise.all(
    prefectures.map(async (prefecture) => {
      const {
        result: { boundaryYear, data: populationCompositions },
      } = await resasClient.getPopulationComposition({
        prefCode: prefecture.prefCode,
        cityCode: '-',
      });

      return { prefecture, boundaryYear, populationCompositions };
    }),
  );

  return {
    props: {
      prefecturePopulationCompositions: JSON.parse(
        JSON.stringify(prefecturePopulationCompositions.sort((a, b) => a.prefecture.prefCode - b.prefecture.prefCode)),
      ),
    },
    revalidate: 60 * 60 * 24,
  };
};

export default RootPage;
