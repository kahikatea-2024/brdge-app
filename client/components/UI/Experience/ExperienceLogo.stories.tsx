import type { Meta, StoryObj } from '@storybook/react'

import Background from '../Background/Background'
import work from '../../../../public/images/work.png'
import education from '../../../../public/images/education.png'
import ExperienceLogo from './ExperienceLogo'

const meta: Meta<typeof ExperienceLogo> = {
  title: 'Design System/UI/Experience',
  component: ExperienceLogo,
}

type Story = StoryObj<typeof ExperienceLogo>

export const Work: Story = {
  render: () => (
    <Background>
      <ExperienceLogo className="w-20" src={work} />
    </Background>
  ),
}
export const Education: Story = {
  render: () => (
    <Background>
      <ExperienceLogo className="w-20" src={education} />
    </Background>
  ),
}

export default meta
