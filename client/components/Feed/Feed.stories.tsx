import type { Meta, StoryObj } from '@storybook/react'

import Feed from './Feed'

const meta = {
  title: 'Design System/Page Components/Feed',
  component: Feed,
} satisfies Meta<typeof Feed>

export default meta

type Story = StoryObj<typeof meta>

const mockPost = {
  feed_post_id: 1,
  user_id: 1,
  content: `Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess
              what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas
              cracking algorithms left and right, and Im still tryin to figure out
              if &quot;honk&quot; counts as code. Join us for pixel-powered fun
              and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles
              #SwampyTechAdventure`,
  post_date: '04 July',
  image_url:
    'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
}

const PostArray = [mockPost, mockPost, mockPost]

export const Default: Story = {
  args: {
    Posts: PostArray,
  },
}
