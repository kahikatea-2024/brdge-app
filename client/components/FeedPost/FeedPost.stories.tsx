import type { Meta, StoryObj } from '@storybook/react'

import FeedPost from './FeedPost'
import Background from '../UI/Background/Background'

const meta: Meta<typeof FeedPost> = {
  title: 'Design System/Page Components/FeedPost',
  component: FeedPost,
}

type Story = StoryObj<typeof FeedPost>

export const Post: Story = {
  render: () => (
    <Background>
      <FeedPost />
    </Background>
  ),
}

export default meta
