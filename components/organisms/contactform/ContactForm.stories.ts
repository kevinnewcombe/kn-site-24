import type { Meta, StoryObj } from '@storybook/react';

import ContactForm from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  name: 'Default',
};

