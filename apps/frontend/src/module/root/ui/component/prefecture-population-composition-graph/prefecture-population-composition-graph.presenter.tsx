import { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import { Graph, GraphType, Options } from '@/common/component/graph/graph.container';
import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';

export type PrefecturePopulationCompositionGraphProps = Omit<ComponentPropsWithoutRef<typeof Graph>, 'options'> & {
  prefecturePopulationCompositions: PrefecturePopulationComposition[];
};

export const PrefecturePopulationCompositionGraph: FC<PrefecturePopulationCompositionGraphProps> = ({
  prefecturePopulationCompositions,
  ...props
}) => {
  const options = useMemo<Options>(
    () => ({
      title: {
        text: 'Total Population Movements by Prefecture',
        style: {
          fontWeight: '700',
        },
      },
      xAxis: {
        title: {
          text: 'Year',
        },
      },
      yAxis: {
        title: {
          text: 'Total Population',
        },
      },
    }),
    [],
  );

  return (
    <Graph
      options={{
        ...options,
        series: prefecturePopulationCompositions.map<GraphType.SeriesOptionsType>((prefecturePopulationComposition) => ({
          type: 'line',
          name: prefecturePopulationComposition.prefecture.prefName,
          data: prefecturePopulationComposition.populationComposition.data.map<GraphType.PointOptionsObject>((populationComposition) => ({
            x: populationComposition.year,
            y: populationComposition.value,
          })),
        })),
      }}
      {...props}
    />
  );
};
