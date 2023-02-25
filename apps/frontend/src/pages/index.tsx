import type { Prefecture, PopulationComposition } from '@yumemi-exam/resas-api/model';
import type { GetStaticProps, NextPage } from 'next';
import { getPopulationComposition } from '@/module/root/repository/impl/get-population-composition.repository';
import { getPrefectures } from '@/module/root/repository/impl/get-prefectures.repository';
import { getPrefecturePopulationCompositions } from '@/module/root/use-case/impl/get-prefecture-population-compositions.use-case';

type RootPageProps = {
  prefecturePopulationCompositions: {
    prefecture: Prefecture;
    boundaryYear: number;
    populationCompositions: PopulationComposition[];
  }[];
};

const RootPage: NextPage<RootPageProps> = () => <h1 className="text-primary">Hello, yumemi-exam World!</h1>;

export const getStaticProps: GetStaticProps<RootPageProps> = async () => {
  const prefecturePopulationCompositions = await getPrefecturePopulationCompositions({
    inject: {
      getPopulationComposition,
      getPrefectures,
    },
  });

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
