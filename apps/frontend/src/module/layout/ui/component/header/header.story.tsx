import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Header } from '@/module/layout/ui/component/header/header.presenter';

type Story = ComponentStoryObj<typeof Header>;

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
