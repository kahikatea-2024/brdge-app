import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

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
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Profile>

export const Main: Story = {}
