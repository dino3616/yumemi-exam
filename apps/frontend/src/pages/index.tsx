import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/module/layout/ui/layout.page';
import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';
import { getPopulationComposition } from '@/module/root/repository/impl/get-population-composition.repository';
import { getPrefectures } from '@/module/root/repository/impl/get-prefectures.repository';
import { Root } from '@/module/root/ui/root.page';
import { getPrefecturePopulationCompositions } from '@/module/root/use-case/impl/get-prefecture-population-compositions.use-case';

type RootPageProps = {
  prefecturePopulationCompositions: PrefecturePopulationComposition[];
};

const RootPage: NextPage<RootPageProps> = ({ prefecturePopulationCompositions }: RootPageProps) => (
  <Layout title="Yumemi Inc. coding exam @ shio" className="py-10 px-5 md:px-10">
    <Root prefecturePopulationCompositions={prefecturePopulationCompositions} />
  </Layout>
);

export const getStaticProps: GetStaticProps<RootPageProps> = async () => {
  const prefecturePopulationCompositions = await getPrefecturePopulationCompositions({
    inject: {
      getPopulationComposition,
      getPrefectures,
    },
  });

  return {
    props: {
      prefecturePopulationCompositions: JSON.parse(JSON.stringify(prefecturePopulationCompositions)),
    },
    revalidate: 60 * 60 * 24,
  };
};

export default RootPage;
