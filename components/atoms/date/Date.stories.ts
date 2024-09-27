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
  argTypes: {
    dateString: {
      description:'Must follow any format <a href="https://date-fns.org/v3.6.0/docs/format">supported by date-fns</a>.'
    },
    textFormat: {
      description: 'Must follow the format outlined <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values">here</a>.'
    }
  }
};

