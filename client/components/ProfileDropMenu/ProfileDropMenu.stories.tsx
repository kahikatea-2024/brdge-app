import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import DropdownMenu from './ProfileDropMenu.tsx'
import Background from '../UI/Background/Background'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Design System/Page Components/DropMenu',
  component: DropdownMenu,
  render: () => (
    <Background>
      <DropdownMenu user={undefined} />
    </Background>
  ),
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Main: Story = {}
