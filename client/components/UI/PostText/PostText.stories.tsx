import type { Meta, StoryObj } from '@storybook/react'

import PostText from './PostText'
import Background from '../Background/Background'

const meta: Meta<typeof PostText> = {
  title: 'Design System/UI/PostText',
  component: PostText,
}

type Story = StoryObj<typeof PostText>
const text = ''

export const Post: Story = {
  render: () => (
    <Background>
      <PostText>
        Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess
        what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas
        cracking algorithms left and right, and Im still tryin to figure out if
        &quot;honk&quot; counts as code. Join us for pixel-powered fun and
        plenty of laughs in Far, Far Away! #DonkeysCodingChronicles
        #SwampyTechAdventure
      </PostText>
    </Background>
  ),
}

export default meta
