import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import Home from './Home'
import Background from '../../components/UI/Background/Background'

const meta: Meta<typeof Home> = {
  title: 'Design System/Pages/Home',
  component: Home,
  render: () => (
    <Background>
      <Home />
    </Background>
  ),
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Home>

export const Main: Story = {}
