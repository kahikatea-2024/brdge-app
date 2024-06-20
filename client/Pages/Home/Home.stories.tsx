import type { Meta, StoryObj } from '@storybook/react'

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
}

export default meta

type Story = StoryObj<typeof Home>

export const Main: Story = {}
