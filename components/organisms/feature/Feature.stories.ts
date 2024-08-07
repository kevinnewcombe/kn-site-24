import type { Meta, StoryObj } from '@storybook/react';

import Feature from './Feature';

const meta: Meta<typeof Feature> = {
  title: 'Organisms/Feature',
  component: Feature,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Feature>;

export const Default: Story = {
  name: 'Feature',
  args: {
    // Add default values here
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

