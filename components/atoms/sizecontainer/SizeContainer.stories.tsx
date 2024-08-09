import type { Meta, StoryObj } from '@storybook/react';

import SizeContainer from './SizeContainer';

const meta: Meta<typeof SizeContainer> = {
  title: 'Atoms/SizeContainer',
  component: SizeContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SizeContainer>;

export const Default: Story = {
  name: 'SizeContainer',
  args: {
    size: 300
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    size: {
      description: "The maximum width of the container",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
      control: { type: 'select' },
      options: [200, 300],
    }
  }
};

export const Large: Story = {
  name: '250',
  args: {
    size: 250
  },
};

