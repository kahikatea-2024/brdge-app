import type { Meta, StoryObj } from '@storybook/react'

import SocialMediaIcons from './SocialMediaIcons'
import Background from '../Background/Background'
import facebook from '../../../../public/images/facebooklogo.png'
import github from '../../../../public/images/githublogo.png'
import linkedin from '../../../../public/images/linkedinlogo.png'

const meta: Meta<typeof SocialMediaIcons> = {
  title: 'Design System/UI/SocialMedia Icons',
  component: SocialMediaIcons,
}

type Story = StoryObj<typeof SocialMediaIcons>

export const Facebook: Story = {
  render: () => (
    <Background>
      <SocialMediaIcons className="w-20" src={facebook} />
    </Background>
  ),
}
export const Github: Story = {
  render: () => (
    <Background>
      <SocialMediaIcons className="w-20" src={github} />
    </Background>
  ),
}
export const LinkedIn: Story = {
  render: () => (
    <Background>
      <SocialMediaIcons className="w-20" src={linkedin} />
    </Background>
  ),
}

export default meta
