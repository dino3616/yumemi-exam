import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { BsCheck } from 'react-icons/bs';
import { Checkbox } from '@/common/component/checkbox/checkbox.presenter';

type Story = ComponentStoryObj<typeof Checkbox.Root>;

const meta: ComponentMeta<typeof Checkbox.Root> = {
  component: Checkbox.Root,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-3">
      <Checkbox.Root {...args} aria-label="storybook checkbox" id="checkbox">
        <Checkbox.Indicator>
          <BsCheck size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="checkbox" className="font-semibold">
        Storybook
      </label>
    </div>
  ),
};
