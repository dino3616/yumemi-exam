import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  mockedPrefecturePopulationComposition1,
  mockedPrefecturePopulationComposition2,
  mockedPrefecturePopulationComposition3,
} from '@/module/root/model/mock/mocked-prefecture-population-composition.model';
import { PrefecturePopulationCompositionGraph } from '@/module/root/ui/component/prefecture-population-composition-graph/prefecture-population-composition-graph.presenter';

type Story = ComponentStoryObj<typeof PrefecturePopulationCompositionGraph>;

const meta: ComponentMeta<typeof PrefecturePopulationCompositionGraph> = {
  component: PrefecturePopulationCompositionGraph,
  argTypes: {
    prefecturePopulationCompositions: {
      description: 'Total population compositions by prefecture.',
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    prefecturePopulationCompositions: [
      mockedPrefecturePopulationComposition1,
      mockedPrefecturePopulationComposition2,
      mockedPrefecturePopulationComposition3,
    ],
  },
};
