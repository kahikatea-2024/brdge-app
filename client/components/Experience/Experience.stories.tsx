import type { Meta, StoryObj } from '@storybook/react'
import Background from '../UI/Background/Background'
import Experience from './Experience'

const meta: Meta<typeof Experience> = {
  title: 'Design System/Page Components/Experience',
  component: Experience,
  render: () => (
    <Background>
      <Experience />
    </Background>
  ),
}

type Story = StoryObj<typeof Experience>

export default meta

export const Main: Story = {}
