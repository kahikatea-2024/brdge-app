import type { Meta, StoryObj } from '@storybook/react'

import PostComponent from './PostComponent'
import Background from '../UI/Background/Background'

const meta: Meta<typeof PostComponent> = {
  title: 'Post component',
  component: PostComponent,
}

type Story = StoryObj<typeof PostComponent>

export const Post: Story = {
  render: () => (
    <Background>
      <PostComponent />
    </Background>
  ),
}

export default meta
