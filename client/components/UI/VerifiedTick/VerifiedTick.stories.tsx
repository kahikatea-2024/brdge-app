import type { Meta, StoryObj } from '@storybook/react'

import VerifiedTick from './VerifiedTick'
import Background from '../Background/Background'

const meta: Meta<typeof VerifiedTick> = {
  title: 'VerifiedTick',
  component: VerifiedTick,
}

type Story = StoryObj<typeof VerifiedTick>

export const Primary: Story = {
  render: () => (
    <Background>
      <VerifiedTick />
    </Background>
  ),
}

export default meta
