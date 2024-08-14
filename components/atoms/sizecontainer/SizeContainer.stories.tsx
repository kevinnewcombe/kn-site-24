import type { Meta, StoryObj } from '@storybook/react';

import SizeContainer from './SizeContainer';

const meta: Meta<typeof SizeContainer> = {
  title: 'Atoms/SizeContainer',
  component: SizeContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SizeContainer>;

const sampleText = (
  <>
    <h2>
      Praesent scelerisque sapien non tortor molestie, at varius eros ultricies.
    </h2>
    <p>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Nunc dapibus
      purus velit, ac <strong>ultricies enim semper vel</strong>. Maecenas vitae
      urna tempus, vestibulum sapien et, ultrices lorem. Quisque eu vulputate
      diam, sit amet cursus quam. Proin sollicitudin ullamcorper tincidunt.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
      facilisi. Sed sit amet est porta, fringilla nisl id, tincidunt augue.
    </p>
    <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM2NDMzNDl8&ixlib=rb-4.0.3&q=85&w=1000&h=750" alt="placeholder image" />
    <ul>
      <li>
        Nunc dictum, mi vel vestibulum condimentum, lacus quam accumsan velit,
      </li>
      <li>
        et efficitur urna mi non metus. Ut eu tellus lorem. Duis imperdiet,
      </li>
      <li>
        erat ut hendrerit molestie, justo massa porttitor nibh, in commodo est
        urna vitae
      </li>
      <li>
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra,
      </li>
    </ul>
  </>
);
export const Default: Story = {
  name: '300 wide (default)',
  args: {
    size: 300,
    children: sampleText
  },
  argTypes: {
    size: {
      description: "The maximum width of the container",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
      control: { type: 'select' },
      options: [250, 300],
    },
    children: {
      description: "A ReactNode to render inside the container",
    }
  }
};

export const Size250: Story = {
  name: '250',
  args: {
    size: 250,
    children: sampleText
  },
};

