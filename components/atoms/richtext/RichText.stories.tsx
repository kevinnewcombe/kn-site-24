import type { Meta, StoryObj } from '@storybook/nextjs-vite'  with { "resolution-mode": "import" };

import RichText from './RichText';

const meta: Meta<typeof RichText> = {
  title: 'Atoms/RichText',
  component: RichText,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof RichText>;



export const Default: Story = {
  name: 'Default',
  args: {
    children: <>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>In gravida <strong>felis dui, sed pretium</strong> felis imperdiet <a href="#">tristique</a>.</p>
    </>
  }
};

