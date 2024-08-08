import type { Meta, StoryObj } from '@storybook/react';

import ProjectCards from './ProjectCards';

const meta: Meta<typeof ProjectCards> = {
  title: 'Organisms/ProjectCards',
  component: ProjectCards,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCards>;

export const Default: Story = {
  name: "ProjectCards",
  args: {
    projects: [
      {
        name: "Animation Shorthand Generator",
        url: "https://animation-shorthand-generator.netlify.app/",
        date: "2024-04-10T00:00:00.000Z",
        role: "Development, Design",
        description: "A tool for generating one-line CSS animation values.",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/1G1tVfbiBulRvSUZtar1p6/032fb4ef4a5366baed5e191691895e99/Screenshot_2024-06-25_at_11.42.51_AM.png",
          alt: "",
        },
      },
      {
        name: "Chain Chomp",
        url: "https://codepen.io/kevinnewcombe/pen/gOGRaEo",
        date: "2022-12-20T00:00:00.000Z",
        role: "Development, Design",
        description:
          "A Chain Chomp built in three.js that tries to attack your pointer.",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/1u2VW0YlGK1XyyY90WTX0i/0f4fcdb89df4d7a58059b55afb0d85dc/Screenshot_2024-06-25_at_11.34.13_AM.png",
          alt: "",
        },
      },
      {
        name: "Pure CSS Blackjack",
        url: "https://codepen.io/kevinnewcombe/pen/JjbKpMG",
        date: "2020-06-09T00:00:00.000Z",
        role: "Development",
        description:
          "A pure CSS hand of Blackjack which uses animating/pausing @property values to generate a random-ish set of cards.",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/6MwZJOpblSb2dJwkZhwTTM/16f1a98e27b83ed12cf97dd32f332d8f/Screenshot_2024-06-25_at_11.32.59_AM.png",
          alt: "",
        },
      },
      {
        name: "Build an Explorable 3D Scene with Three.js",
        url: "https://www.skillshare.com/en/classes/build-an-explorable-3d-scene-with-three-js/1275426279",
        date: "2019-06-13T00:00:00.000Z",
        role: "Course design, hosting",
        description:
          "A Skillshare course that serves as an introduction to some basic Three.js concepts.",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/1nMH9dALANE1PJHUlpYiqF/773860dab16fec4349a2f87dcc05b6cd/Screenshot_2024-06-25_at_11.41.49_AM.png",
          alt: "",
        },
      },
      {
        name: "Air Guitar",
        url: "https://codepen.io/kevinnewcombe/pen/QRZdYP",
        date: "2019-05-17T00:00:00.000Z",
        role: "Concept, Development",
        description:
          "Uses Tensorflow and Posenet to detect the position of your hands, and plays appropriate musical notes based on where your hands would be on a guitar.",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/7dHHjozATyVaLMRtGEqNMo/f48038378027b113fae24cfeb0fb820d/Screenshot_2024-06-25_at_1.36.20_PM.png",
          alt: "Screenshot of playable Air Guitar",
        },
      },
      {
        name: "Elevation Map",
        url: "https://codepen.io/kevinnewcombe/pen/XMVoKv",
        date: "2017-03-02T00:00:00.000Z",
        role: "Concept, Development",
        description: "Elevation data mapped onto a three.js particle system",
        screenshot: {
          filename: "https://images.ctfassets.net/tk4rs2ojn89c/7l4nap2mRKVDLLaDnbTuJx/95310a64e894d9e548d8e4c634b75de6/Screenshot_2024-06-25_at_11.33.28_AM.png",
          alt: "Elevation map",
        },
      },
    ],
  },
};

