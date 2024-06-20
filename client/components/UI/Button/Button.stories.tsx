import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import Background from '../Background/Background'

const meta: Meta<typeof Button> = {
  title: 'Design System/UI/Button',
  component: Button,
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => (
    <Background>
      <Button>Primary</Button>
    </Background>
  ),
}

export const Secondary: Story = {
  render: () => (
    <Background>
      <Button className="bg-white">Secondary</Button>
    </Background>
  ),
}

export const Warning: Story = {
  render: () => (
    <Background>
      <Button className="bg-warning">Warning</Button>
    </Background>
  ),
}

export default meta
