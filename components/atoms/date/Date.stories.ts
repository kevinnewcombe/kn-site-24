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
    dateString: 'October 31, 2000',
    textFormat: 'LLLL d, yyyy'
  },
};

