import type { Meta, StoryObj } from '@storybook/react'

import ExperienceCard from './ExperienceCard'
import Background from '../Background/Background'

const meta: Meta<typeof ExperienceCard> = {
  title: 'Design System/UI/Experience Card',
  component: ExperienceCard,
}

type Story = StoryObj<typeof ExperienceCard>

export const Primary: Story = {
  render: () => (
    <Background>
      <ExperienceCard />
    </Background>
  ),
}

export default meta
