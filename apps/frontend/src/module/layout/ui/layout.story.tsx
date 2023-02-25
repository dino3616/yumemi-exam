import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Layout } from '@/module/layout/ui/layout.page';

type Story = ComponentStoryObj<typeof Layout>;

const meta: ComponentMeta<typeof Layout> = {
  component: Layout,
  argTypes: {
    title: {
      description: 'page title.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    title: 'Yumemi Inc. coding exam @ shio',
  },
};
