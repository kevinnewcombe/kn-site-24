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
  name: 'Post',
  args: {
    title: 'A really great headline', 
    date: 'January 1, 2000',
    content: {"json":{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"HELLO again..... SUP.... Suspendisse rhoncus justo tempus felis tincidunt, id convallis libero vehicula. Donec ipsum sapien, ","marks":[],"data":{}}]},{"nodeType":"embedded-asset-block","data":{"target":{"sys":{"id":"1lF1N4kQ7I9dnRY64Lbq8m","type":"Link","linkType":"Asset"}}},"content":[]},{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"sollicitudin sed vulputate ","marks":[],"data":{}},{"nodeType":"text","value":"eget","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":", faucibus quis dolor. Praesent pretium congue facilisis. Mauris dapibus augue at porttitor varius. ","marks":[],"data":{}},{"nodeType":"text","value":"Donec sagittis finibus mauris","marks":[{"type":"italic"}],"data":{}},{"nodeType":"text","value":" id suscipit. Praesent dapibus orci nulla, in blandit dui scelerisque ac. Sed eget lorem erat. Donec semper dui nec sollicitudin imperdiet. Proin vulputate eget nisi semper consectetur.","marks":[],"data":{}}]},{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"","marks":[],"data":{}}]},{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Suspendisse nec nunc in dui vehicula bibendum. Pellentesque luctus ligula sapien, et egestas leo semper vel. Etiam aliquet efficitur finibus. Nam quis tempus elit. Aenean erat ex, scelerisque auctor nisl vel, tristique vulputate lacus. Praesent dapibus posuere elit. Quisque porttitor a est ut rhoncus. Vivamus posuere gravida nulla eu consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet lacinia sagittis. Sed vitae arcu aliquam, mattis nulla eu, volutpat lacus. Maecenas sit amet diam at eros imperdiet faucibus non ac magna.","marks":[],"data":{}}]},{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"\n","marks":[],"data":{}}]}]},"links":{"assets":{"block":[{"sys":{"id":"1lF1N4kQ7I9dnRY64Lbq8m"},"width":5003,"height":3335,"url":"https://images.ctfassets.net/tk4rs2ojn89c/1lF1N4kQ7I9dnRY64Lbq8m/f5ae3f3b38882474a06a9b3d065957e2/benjamin-ashton-jngM9zOnohg-unsplash.jpg","description":"Here's a beach"}]}}}
  },
};

