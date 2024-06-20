import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'
import Background from '../Background/Background'

const meta: Meta<typeof Logo> = {
  title: 'Design System/UI/Logo',
  component: Logo,
  render: () => (
    <Background>
      <Logo />
    </Background>
  ),
}

export default meta

type Story = StoryObj<typeof Logo>

export const Main: Story = {}
