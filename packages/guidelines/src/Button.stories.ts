import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
  args: { isDisabled: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Button',
  },
};
