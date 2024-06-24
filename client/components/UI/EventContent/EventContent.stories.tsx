import type { Meta, StoryObj } from '@storybook/react'
import Background from '../../UI/Background/Background'
import EventContent from './EventContent'

const meta: Meta<typeof EventContent> = {
  title: 'Design System/UI/EventContent',
  component: EventContent,
  render: () => (
    <Background>
      <EventContent />
    </Background>
  ),
}

type Story = StoryObj<typeof EventContent>

export default meta

export const Main: Story = {}
