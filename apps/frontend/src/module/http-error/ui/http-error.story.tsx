import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { HttpError } from '@/module/http-error/ui/http-error.page';

type Story = ComponentStoryObj<typeof HttpError>;

const meta: ComponentMeta<typeof HttpError> = {
  component: HttpError,
  argTypes: {
    title: {
      description: 'Error title.',
      control: {
        type: 'text',
      },
    },
    message: {
      description: 'Error message.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    title: '404 | Not Found',
    message: 'The page you are looking for does not exist.',
  },
};
