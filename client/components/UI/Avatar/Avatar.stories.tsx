import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'
import Background from '../Background/Background'

const meta: Meta<typeof Avatar> = {
  title: 'Design System/UI/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Select avatar size',
    },
    verified: {
      control: 'boolean',
      description: 'Hide or show the Verified Tick',
    },
  },
  render: ({ ...args }) => (
    <Background>
      <Avatar
        {...args}
        src="https://www.pngkey.com/png/detail/113-1130156_laughing-donkey-shrek-shrek-forever-after-poster.png"
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
