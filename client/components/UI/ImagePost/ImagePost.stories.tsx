import type { Meta, StoryObj } from '@storybook/react'

import ImagePost from './ImagePost'
import Background from '../Background/Background'

const meta: Meta<typeof ImagePost> = {
  title: 'ImagePost',
  component: ImagePost,
}

type Story = StoryObj<typeof ImagePost>

export const Primary: Story = {
  render: () => (
    <Background>
      <ImagePost src='https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg'/>
    </Background>
  ),
}

export default meta