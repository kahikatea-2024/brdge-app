import type { Meta, StoryObj } from '@storybook/react'

import Background from '../Background/Background'
import CommentField from './CommentField'

const meta: Meta<typeof CommentField> = {
  title: 'Comment',
  component: CommentField,
}

type Story = StoryObj<typeof CommentField>

export const PostBox: Story = {
  render: () => (
    <Background>
      <CommentField
        className=" rounded-xl bg-extraLightGrey pl-2 pt-2 text-darkGrey focus:text-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Comment"
      />
    </Background>
  ),
}

export default meta
