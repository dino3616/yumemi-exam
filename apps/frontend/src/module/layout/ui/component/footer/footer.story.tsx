import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Footer } from '@/module/layout/ui/component/footer/footer.presenter';

type Story = ComponentStoryObj<typeof Footer>;

const meta: ComponentMeta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
