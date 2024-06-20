import type { Meta, StoryObj } from '@storybook/react'

import Profile from './Profile'
import Background from '../../components/UI/Background/Background'

const meta: Meta<typeof Profile> = {
  title: 'Design System/Pages/Profile',
  component: Profile,
  render: () => (
    <Background>
      <Profile />
    </Background>
  ),
}

export default meta

type Story = StoryObj<typeof Profile>

export const Main: Story = {}