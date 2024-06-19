import type { Meta, StoryObj } from '@storybook/react'

import Background from '../Background/Background'
import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
}

type Story = StoryObj<typeof TextField>

export const MyPrimary: Story = {
  name: 'Primary',
  render: () => (
    <Background>
      <TextField props="Primary" />,
    </Background>
  ),
}

export default meta
