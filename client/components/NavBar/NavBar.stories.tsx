import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import NavBar from './NavBar'
import Background from '../UI/Background/Background'

const meta: Meta<typeof NavBar> = {
  title: 'Design System/Page Components/Nav Bar',
  component: NavBar,
  render: () => (
    <Background>
      <NavBar />
    </Background>
  ),
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof NavBar>

export const Main: Story = {}
