import type { Meta, StoryObj } from '@storybook/react';

import BtnColorScheme from './BtnColorScheme';

const meta: Meta<typeof BtnColorScheme> = {
  title: 'Atoms/BtnColorScheme',
  component: BtnColorScheme,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BtnColorScheme>;

export const Default: Story = {
  name: 'Default'
};

