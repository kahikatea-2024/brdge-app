import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'
import Background from '../Background/Background'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
}

type Story = StoryObj<typeof Avatar>

export const Small: Story = {
  render: () => (
    <Background>
      <Avatar
        size="small"
        src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
      />
    </Background>
  ),
}

export const Medium: Story = {
  render: () => (
    <Background>
      <Avatar
        size="medium"
        src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
      />
    </Background>
  ),
}

export const Large: Story = {
  render: () => (
    <Background>
      <Avatar
        size="large"
        src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
        verified={true}
      />
    </Background>
  ),
}

export default meta
