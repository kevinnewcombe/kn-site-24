import type { Meta, StoryObj } from '@storybook/react';

import Date from './Date';

const meta: Meta<typeof Date> = {
  title: 'Atoms/Date',
  component: Date,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Date>;

export const Default: Story = {
  name: 'Date',
  args: {
    dateString: 'July 1, 2020'
  },
  argTypes: {
    example: {
      description: "Description for 'Example' arg"
    }
  }
};

