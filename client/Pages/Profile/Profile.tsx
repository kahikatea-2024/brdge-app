import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import NavBar from '../../components/NavBar/NavBar'
import Avatar from '../../components/UI/Avatar/Avatar'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
import ProfileCoverImage from '../../components/UI/ProfileCoverImage/ProfileCoverImage'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons/SocialMediaIcons'
import { useProfile } from '../../hooks/useProfile'
import type { Profile } from '../../../models/profile'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const linkedin = '../public/images/linkedinlight.png'
const github = '../public/images/githublight.png'
const facebook = '../public/images/facebooklight.png'

// Mock data
// const data = {
//   bio: 'I live in a Swamp and I do career Mentorship',
//   avatar_image:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
//   cover_image: '',
//   location: 'Far Far Away',
//   website: 'Cyberfinder.com ',
// }

export default function Profile() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  let { id } = useParams()
  if (Number(id) > 3 || id === undefined) {
    id = '1'
  }

  const { data, isLoading, isError } = useProfile(`${id}`)

  if (isLoading) {
    return (
      <span>
        {' '}
        <LoadingSpinner className="size-20" />
      </span>
    )
  }

  if (isError) {
    return <span>Error...</span>
  }
  if (data)
    return (
      <div className={`${darkMode && 'dark'}`}>
        {/* <button
          onClick={toggleDarkMode}
          className="absolute left-8 top-32 z-50 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black"
        >
          {darkMode ? 'LHT' : 'DRK'}
        </button> */}

        <div>
          <NavBar />
        </div>

        <div className=" mx-auto flex w-[90%] text-center">
          <ProfileCoverImage
            className="h-56 w-full rounded-md object-cover "
            src={data.cover_image}
          />
          <div className="left-160 absolute top-52 -translate-y-1/2 transform">
            <Avatar
              size="large"
              verified={true}
              className="mb-50 rounded-full border-4 border-extraLightGrey"
              src={data.avatar_image}
            />
          </div>
        </div>
        <div className=" mx-auto mt-2 flex w-[90%] text-center">
          <div className="rounded-md bg-dlightGrey p-4 text-center font-sans text-sm text-extraLightGrey dark:text-dextraLightGrey">
            {data.bio}
          </div>
        </div>
      </div>
    )
}
