import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { mockedPrefecture1, mockedPrefecture2, mockedPrefecture3 } from '@/module/root/model/mock/mocked-prefecture.model';
import { PrefectureCheckboxList } from '@/module/root/ui/component/prefecture-checkbox-list/prefecture-checkbox-list.presenter';

type Story = ComponentStoryObj<typeof PrefectureCheckboxList>;

const meta: ComponentMeta<typeof PrefectureCheckboxList> = {
  component: PrefectureCheckboxList,
  argTypes: {
    prefectures: {
      description: 'List of prefectures.',
      control: { type: 'object' },
    },
    onCheckedChange: {
      description: 'Function to call when changing the checked state of a prefecture.',
      control: { type: 'function' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    prefectures: [mockedPrefecture1, mockedPrefecture2, mockedPrefecture3],
    onCheckedChange: () => ({}),
  },
};
