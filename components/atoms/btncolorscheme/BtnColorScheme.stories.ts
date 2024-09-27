import type { Meta, StoryObj } from '@storybook/react';

import BtnColorScheme from './BtnColorScheme';

const meta: Meta<typeof BtnColorScheme> = {
  title: 'Atoms/BtnColorScheme',
  component: BtnColorScheme,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BtnColorScheme>;

export const Default: Story = {
  name: 'Light',
  args: {
    inheritedTheme: 'light'    
  },
  argTypes: {
    inheritedTheme: {
      description: "The current theme of the page. Note - this control only exists to preview in Storybook. On the real site, this is determined via <a href=\"https://github.com/pacocoursey/next-themes\">next-themes</a>",
      control: { type: 'select' },
      options: [null, "light", "dark"],
    },
  }
};

export const Dark: Story = {
  name: 'Dark',
  args: {
    inheritedTheme: 'dark'    
  }
};
