import type { Meta, StoryObj } from '@storybook/react'
import Background from '../UI/Background/Background'
import Education from './Education'

const meta: Meta<typeof Education> = {
  title: 'Design System/Page Components/Education',
  component: Education,
  render: () => (
    <Background>
      <Education />
    </Background>
  ),
}

type Story = StoryObj<typeof Education>

export default meta

export const Main: Story = {}
