import type { Meta, StoryObj } from '@storybook/react'

import CommentIcon from './CommentIcon'
import CommentImage from "images/comment-icon.png"
import Background from '../Background/Background'

const comImage = "images/comment-icon.png"


const meta: Meta<typeof CommentIcon> = {
  title: 'Design System/UI/CommentIcon',
  component: CommentIcon,
}

type Story = StoryObj<typeof CommentIcon>

export const Comment: Story = {
  render: () => (
    <Background>
      <CommentIcon className="w-20" src={comImage} />
    </Background>
  ),
}

export default meta

