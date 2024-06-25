import type { Meta, StoryObj } from '@storybook/react';

import PostPreview from './PostPreview';

const meta: Meta<typeof PostPreview> = {
  title: 'Molecules/PostPreview',
  component: PostPreview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PostPreview>;

export const Default: Story = {
  name: 'PostPreview',
  args: {
    title: 'How to stain a deck',
    date: 'October 31, 2021',
    slug: 'one-two-three-four',
    excerpt: 'Some text enticing the user to read this post.',
  },
};

