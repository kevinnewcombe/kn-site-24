import type { Meta, StoryObj } from '@storybook/react';

import PageIntro from './PageIntro';

const meta: Meta<typeof PageIntro> = {
  title: 'Organisms/PageIntro',
  component: PageIntro,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageIntro>;

export const Default: Story = {
  name: 'PageIntro',
  args: {
    title: "Here's a Page Title",
    children: "Some text to introduce the page."
  }
};

