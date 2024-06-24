import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: 'Header',
  args: {
    // Add args here
  },
  argTypes: {
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

