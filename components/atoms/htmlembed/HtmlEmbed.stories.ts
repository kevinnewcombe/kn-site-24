import type { Meta, StoryObj } from '@storybook/react';

import HtmlEmbed from './HtmlEmbed';

const meta: Meta<typeof HtmlEmbed> = {
  title: 'Atoms/HtmlEmbed',
  component: HtmlEmbed,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Default: Story = {
  name: 'HtmlEmbed',
  args: {
    html: '<p>Lorem ipsum <strong>dolor</strong> <a href="#">sit</a></p> <ul><li>amet</li><li>consectetur</li></ul>'
  },
  argTypes: { // https://storybook.js.org/docs/api/arg-types
    html: {
      description: "A string of raw HTML to be rendered."
    }
  }
};

