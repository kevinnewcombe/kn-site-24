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
    html: "<p>Here's a paragraph tag with <a href=\"#\">links</a> and <sup>superscript</sup> and <strong>strong text</strong> and even some <span id=\"red\"><style>#red{ color: #8B0000; }</style> inline style tags.</p>"
  },
  argTypes: { 
    html: {
      description: "A string of raw HTML to be rendered. "
    }
  }
};

