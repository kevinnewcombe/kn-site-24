import type { Meta, StoryObj } from '@storybook/react';

import Teaser from './Teaser';

const meta: Meta<typeof Teaser> = {
  title: 'Organisms/Teaser',
  component: Teaser,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Teaser>;

export const Default: Story = {
  name: 'Teaser',
  args: {
    // Add default values here
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

