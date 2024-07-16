import type { Meta, StoryObj } from '@storybook/react'

import Feed from './Feed'
import { Post } from '../../../models/postFeed'

const meta: Meta<typeof Feed> = {
  title: 'Design System/Page Components/Feed',
  component: Feed,
}

export default meta

type Story = StoryObj<typeof meta>

const mockPost: Post = {
  feed_post_id: 1,
  user_id: 1,
  content: `Hey, hey, hey! Donkey here, reporting live from Shrek's swamp. Guess
              what? We're knee-deep in CODING! Shrek's debugging like a pro, Fiona's
              cracking algorithms left and right, and I'm still trying to figure out
              if "honk" counts as code. Join us for pixel-powered fun
              and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles
              #SwampyTechAdventure`,
  timestamp: '04 July',
  image_url:
    'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
}

const PostArray: Post[] = [mockPost, mockPost, mockPost]

export const Default: Story = {
  args: {
    posts: PostArray, // Ensure this matches the expected prop name in the Feed component
  },
}
