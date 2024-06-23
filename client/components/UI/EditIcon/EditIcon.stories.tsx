import type { Meta, StoryObj } from '@storybook/react'

import EditIcon from './EditIcon.tsx'
import Background from '../Background/Background'

const editImage = "images/edit.png"


const meta: Meta<typeof EditIcon> = {
  title: 'Design System/UI/EditIcon',
  component: EditIcon,
}

type Story = StoryObj<typeof EditIcon>

export const Comment: Story = {
  render: () => (
    <Background>
      <EditIcon className="w-20" src={editImage} />
    </Background>
  ),
}

export default meta
