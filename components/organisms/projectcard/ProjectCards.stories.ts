import type { Meta, StoryObj } from '@storybook/react';

import ProjectCards from './ProjectCards';

const meta: Meta<typeof ProjectCards> = {
  title: 'Organisms/ProjectCards',
  component: ProjectCards,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCards>;

const description = { 
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'A Chain Chomp built in three.js that tries to attack your pointer.',
          type: 'text'
        }
      ]
    }
  ]
}

const screenshot = {
  id: 1234,
  filename: "https://a.storyblok.com/f/299841/552x345/85e37de850/screenshot_2024-06-25_at_2-57-23_pm.png",
  alt: "This is alt text",
  name: 'screenshot_1234'
};

export const Default: Story = {
  name: "ProjectCards",
  args: {
    projects: [
      {
        name: "Animation Shorthand Generator",
        url: "https://animation-shorthand-generator.netlify.app/",
        date: "2024-04-10T00:00:00.000Z",
        role: "Development, Design",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
      {
        name: "Chain Chomp",
        url: "https://codepen.io/kevinnewcombe/pen/gOGRaEo",
        date: "2022-12-20T00:00:00.000Z",
        role: "Development, Design",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
      {
        name: "Pure CSS Blackjack",
        url: "https://codepen.io/kevinnewcombe/pen/JjbKpMG",
        date: "2020-06-09T00:00:00.000Z",
        role: "Development",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
      {
        name: "Build an Explorable 3D Scene with Three.js",
        url: "https://www.skillshare.com/en/classes/build-an-explorable-3d-scene-with-three-js/1275426279",
        date: "2019-06-13T00:00:00.000Z",
        role: "Course design, hosting",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
      {
        name: "Air Guitar",
        url: "https://codepen.io/kevinnewcombe/pen/QRZdYP",
        date: "2019-05-17T00:00:00.000Z",
        role: "Concept, Development",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
      {
        name: "Elevation Map",
        url: "https://codepen.io/kevinnewcombe/pen/XMVoKv",
        date: "2017-03-02T00:00:00.000Z",
        role: "Concept, Development",
        description: description,
        screenshot: screenshot,
        component: 'projectCard',
        _uid: ''
      },
    ],
  },
};

