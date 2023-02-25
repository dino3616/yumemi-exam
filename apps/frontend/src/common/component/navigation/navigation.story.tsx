import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { NavigationMenu } from '@/common/component/navigation/navigation.presenter';

type Story = ComponentStoryObj<typeof NavigationMenu.Root>;

const meta: ComponentMeta<typeof NavigationMenu.Root> = {
  component: NavigationMenu.Root,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List className="flex items-center justify-center md:justify-start md:space-x-7">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/" className="text-lg font-bold uppercase tracking-wide">
            Yumemi Inc. coding exam <span className="hidden md:inline">@ shio</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
