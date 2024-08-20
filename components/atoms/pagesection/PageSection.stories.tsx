import type { Meta, StoryObj } from '@storybook/react';

import PageSection from './PageSection';

const meta: Meta<typeof PageSection> = {
  title: 'Atoms/PageSection',
  component: PageSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  name: 'Default',
  args: {
    children: (
      <>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed et pretium nibh. In vulputate velit sed lectus tristique, nec posuere nisl suscipit. Aliquam vulputate diam ex, et malesuada mi mollis non. Donec vehicula orci quis iaculis tristique.</p>
      </>
    )
  },
  argTypes: { 
    children: {
      description: "A React node to be rendered inside the PageSection."
    }
  }

  
};

