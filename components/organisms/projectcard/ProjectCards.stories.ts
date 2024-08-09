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
          filename: "https://a.storyblok.com/f/299841/552x345/85e37de850/screenshot_2024-06-25_at_2-57-23_pm.png",
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
          filename: "https://a.storyblok.com/f/299841/3360x2100/53f1e4b1f5/screenshot_2024-06-25_at_11-34-13_am.png",
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
          filename: "https://a.storyblok.com/f/299841/3360x2100/a2cc799766/screenshot_2024-06-25_at_11-33-28_am.png",
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
          filename: "https://a.storyblok.com/f/299841/3360x2100/4500db1dad/screenshot_2024-06-25_at_11-41-49_am.png",
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
          filename: "https://a.storyblok.com/f/299841/3360x2100/43943640a8/screenshot_2024-06-25_at_11-42-51_am.png",
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
          filename: "https://a.storyblok.com/f/299841/3360x2100/e125ff0896/screenshot_2024-06-25_at_11-32-59_am.png",
          alt: "Elevation map",
        },
      },
    ],
  },
};

