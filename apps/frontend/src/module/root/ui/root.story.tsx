import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  mockedPrefecturePopulationComposition1,
  mockedPrefecturePopulationComposition2,
  mockedPrefecturePopulationComposition3,
} from '@/module/root/model/mock/mocked-prefecture-population-composition.model';
import { Root } from '@/module/root/ui/root.page';

type Story = ComponentStoryObj<typeof Root>;

const meta: ComponentMeta<typeof Root> = {
  component: Root,
  argTypes: {
    prefectureTotalPopulationCompositions: {
      description: 'Total population compositions by prefecture.',
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    prefectureTotalPopulationCompositions: [
      mockedPrefecturePopulationComposition1,
      mockedPrefecturePopulationComposition2,
      mockedPrefecturePopulationComposition3,
    ],
  },
};
