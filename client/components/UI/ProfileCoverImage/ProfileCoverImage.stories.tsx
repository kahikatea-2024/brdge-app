import type { Meta, StoryObj } from '@storybook/react'

import ProfileCoverImage from './ProfileCoverImage'
import Background from '../Background/Background'

const meta: Meta<typeof ProfileCoverImage> = {
  title: 'Design System/UI/Profile Image Cover',
  component: ProfileCoverImage,
}

type Story = StoryObj<typeof ProfileCoverImage>

export const Primary: Story = {
  render: () => (
    <Background>
      <ProfileCoverImage
        className="w-full"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dfq9q35-97e3227f-9e86-4551-8dd1-e63e36ffd8f2.jpg/v1/fill/w_1280,h_360,q_75,strp/shrek_swamp_background_by_darkmoonanimation_dfq9q35-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvZDM3ODljOGMtMDg3NC00MDdjLWE0NTctMDNiMTQ3ZjU5YjE4XC9kZnE5cTM1LTk3ZTMyMjdmLTllODYtNDU1MS04ZGQxLWU2M2UzNmZmZDhmMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ybm3gLnQhLE_RhooyzeiDr2ah8pcRJNGaFfxwXtLnDM"
      />
    </Background>
  ),
}

export default meta
