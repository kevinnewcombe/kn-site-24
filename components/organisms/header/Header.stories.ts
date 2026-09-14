import type { Meta, StoryObj } from '@storybook/nextjs-vite' with { "resolution-mode": "import" };

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: 'Header'
};

