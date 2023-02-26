import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import type HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import { Graph } from '@/common/component/graph/graph.presenter';

type Story = ComponentStoryObj<typeof Graph>;

const meta: ComponentMeta<typeof Graph> = {
  component: Graph,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<HighchartsReact.RefObject>(null);

    return (
      <Graph
        {...args}
        ref={ref}
        options={{
          ...args.options,
          series: [
            {
              type: 'line',
              data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            },
          ],
        }}
      />
    );
  },
};
