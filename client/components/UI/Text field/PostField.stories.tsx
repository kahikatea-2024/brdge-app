import type { Meta, StoryObj } from '@storybook/react'

import PostField from './PostField'
import Background from '../Background/Background'

const meta: Meta<typeof PostField> = {
  title: 'Post',
  component: PostField,
}

type Story = StoryObj<typeof PostField>

export const PostBox: Story = {
  render: () => (
    <Background>
      <PostField
        className="w-1/2 rounded-xl bg-darkGrey pl-2 pt-2 text-extraLightGrey focus:text-lg focus:ring-2 focus:ring-blue-500"
        placeholder="What do you want to share?"
      />
    </Background>
  ),
}

export default meta
