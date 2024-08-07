import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Organisms/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  name: 'Grid',
  args: {
    // Add default values here
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

