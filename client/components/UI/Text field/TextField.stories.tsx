import type { Meta, StoryObj } from '@storybook/react'

import Background from '../Background/Background'
import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Design System/UI/searchBar',
  component: TextField,
}

type Story = StoryObj<typeof TextField>

export const SearchBar: Story = {
  render: () => (
    <Background>
      <TextField
        className="text-darkGray w-full bg-extraLightGrey focus:ring-2 focus:ring-blue-500"
        // defaultValue="Search here"
        placeholder="search"
      />
    </Background>
  ),
}

export default meta
