import type { Meta, StoryObj } from '@storybook/react';

import Portfolio from './Portfolio';

const meta: Meta<typeof Portfolio> = {
  title: 'Pages/Portfolio',
  component: Portfolio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Portfolio>;

export const Default: Story = {
  name: 'Portfolio',
  args: {
    // Add default values here
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

