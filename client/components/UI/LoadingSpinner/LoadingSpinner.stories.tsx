import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './LoadingSpinner'
import Background from '../Background/Background'

const meta: Meta<typeof Spinner> = {
  title: 'Design System/UI/Spinner',
  component: Spinner,
  render: () => (
    <Background>
      <Spinner className="size-20" />
    </Background>
  ),
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Main: Story = {}
