import type { Meta, StoryObj } from '@storybook/react';

import Post from './Post';

const meta: Meta<typeof Post> = {
  title: 'Templates/Post',
  component: Post,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  name: "Post",
  argTypes: {
    editURL: {
      description: "The URL to edit the post in Storyblok. Only displays when the node env is \"development\"",
    },  
  },
  args: {
    title: "A really great headline",
    date: "2024-08-07T14:12:49.807Z",
    editURL: "https://app.storyblok.com/#!/me/spaces/12345/stories/67890/edit",
    children: (
      <>
        <p>
          Class aptent <strong>taciti sociosqu ad litora</strong> torquent per
          conubia nostra, <em>per inceptos himenaeos</em>. Sed et{" "}
          <a href="#">pretium nibh. In vulputate velit</a> sed lectus tristique,
          nec posuere nisl suscipit. Aliquam vulputate diam ex, et malesuada mi
          mollis non. Donec vehicula orci quis iaculis tristique.
        </p>

        <p>
          Fusce at sagittis tellus, ut scelerisque quam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Etiam sagittis commodo lectus, eget facilisis justo accumsan ac. Sed
          ac imperdiet quam, malesuada posuere nisl. Curabitur faucibus purus eu
          cursus efficitur. Vestibulum eleifend cursus tincidunt. Integer id
          dapibus turpis, id malesuada metus. Praesent tempor nisi viverra
          lectus posuere, sed porta massa tristique. Phasellus non nisl
          ultricies, dictum justo ultricies, ullamcorper ipsum. Integer nulla
          dui, pretium nec molestie in, suscipit at ante.
        </p>
        <ul>
          <li>In ac enim vel dolor porta ultricies ut ac ante</li>
          <li>
            Suspendisse at varius metus. Nullam iaculis nisi eget ligula
            porttitor iaculis.
          </li>
          <li>Nulla euismod commodo commodo.</li>
        </ul>
      </>
    ),
  },
};

