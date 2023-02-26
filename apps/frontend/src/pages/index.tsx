import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/module/layout/ui/layout.page';
import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';
import { getPopulationComposition } from '@/module/root/repository/impl/get-population-composition.repository';
import { getPrefectures } from '@/module/root/repository/impl/get-prefectures.repository';
import { Root } from '@/module/root/ui/root.page';
import { getPrefectureTotalPopulationCompositions } from '@/module/root/use-case/impl/get-prefecture-total-population-compositions.use-case';

type RootPageProps = {
  prefectureTotalPopulationCompositions: PrefecturePopulationComposition[];
};

const RootPage: NextPage<RootPageProps> = ({ prefectureTotalPopulationCompositions }: RootPageProps) => (
  <Layout title="Yumemi Inc. coding exam @ shio" className="py-10 px-5 md:px-10">
    <Root prefectureTotalPopulationCompositions={prefectureTotalPopulationCompositions} />
  </Layout>
);

export const getStaticProps: GetStaticProps<RootPageProps> = async () => {
  const prefectureTotalPopulationCompositions = await getPrefectureTotalPopulationCompositions({
    inject: {
      getPopulationComposition,
      getPrefectures,
    },
  });

  return {
    props: {
      prefectureTotalPopulationCompositions: JSON.parse(JSON.stringify(prefectureTotalPopulationCompositions)),
    },
    revalidate: 60 * 60 * 24,
  };
};

export default RootPage;
