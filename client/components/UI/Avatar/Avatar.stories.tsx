import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'
import Background from '../Background/Background'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Select avatar size',
      defaultValue: 'small',
    },
    verified: {
      control: 'boolean',
      description: 'Hide or show the Verified Tick',
      defaultValue: false,
    },
  },
  render: ({ ...args }) => (
    <Background>
      <Avatar
        {...args}
        src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
      />
    </Background>
  ),
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Small: Story = {
  args: {
    size: 'small',
    verified: false,
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    verified: false,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    verified: false,
  },
}

export const LargeVerified: Story = {
  args: {
    size: 'large',
    verified: true,
  },
}
