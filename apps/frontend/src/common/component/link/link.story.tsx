import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Link } from '@/common/component/link/link.presenter';

type Story = ComponentStoryObj<typeof Link>;

const meta: ComponentMeta<typeof Link> = {
  component: Link,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: () => <Link href="/">Link</Link>,
};
