import type { Meta, StoryObj } from '@storybook/react';

import Page from './Page';

const meta: Meta<typeof Page> = {
  title: 'Organisms/Page',
  component: Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  name: 'Page',
  args: {
    // Add default values here
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

