import type * as GraphType from 'highcharts';
import type HighchartsReact from 'highcharts-react-official';
import { ComponentPropsWithoutRef, ComponentPropsWithRef, FC, useMemo, useRef } from 'react';
import { Graph as GraphPresenter } from '@/common/component/graph/graph.presenter';

export { GraphType };

export type Options = ComponentPropsWithRef<typeof GraphPresenter>['options'];

export type GraphProps = Omit<ComponentPropsWithoutRef<'figure'>, 'children'> & {
  options: Options;
};

export const Graph: FC<GraphProps> = ({ options, ...props }) => {
  const ref = useRef<HighchartsReact.RefObject>(null);

  const defaultOptions = useMemo<Highcharts.Options>(
    () => ({
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
          cursor: 'default',
          fontWeight: 'normal',
        },
        itemHoverStyle: {
          fontWeight: 'bold',
        },
        itemMarginBottom: 4,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    }),
    [],
  );

  return (
    <figure data-chromatic="ignore" {...props}>
      <GraphPresenter ref={ref} options={{ ...defaultOptions, ...options }} />
    </figure>
  );
};
