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
  const [darkMode, setDarkMode] = useState(false)
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
        <button
          onClick={toggleDarkMode}
          className="absolute right-16 top-24 z-50 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black"
        >
          {darkMode ? 'LHT' : 'DRK'}
        </button>
        <div className="dark:bg-ddarkGrey relative min-h-screen bg-darkGrey">
          <div>
            <NavBar />
          </div>
          <div className="grid grid-cols-7 place-content-center ">
            <div className="col-span-1 p-6"></div>
            <div className="col-span-5 mt-2 h-48 items-center gap-2 rounded-md bg-gray-700">
              <ProfileCoverImage
                className="h-full w-full rounded-md object-cover"
                src={data.cover_image}
              />
              <div className="top-45 left-160 absolute -translate-y-1/2 transform">
                <Avatar
                  size="large"
                  verified={true}
                  className="mb-50 rounded-full border-4 border-extraLightGrey"
                  src={data.avatar_image}
                />
              </div>
            </div>
            <div className="col-span-1 p-6"></div>
          </div>
          <div className="content grid grid-cols-7 gap-4 p-4">
            <div className="col-span-1"></div>
            <div className="col-span-5 gap-2">
              <div className="dark:bg-dlightGrey container h-29 w-full rounded-md bg-lightGrey p-14">
                <p className="dark:text-dextraLightGrey pb-0  pl-0 text-center font-mono text-sm text-extraLightGrey">
                  {data.bio}
                </p>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>

          <div className="content grid grid-cols-7 gap-4 p-4">
            <div className="col-span-1"></div>
            <div className="col-span-4 gap-1">
              <div className="dark:bg-dlightGrey container  h-28 rounded-md bg-lightGrey ">
                <Experience data={data} />
              </div>
              <div className="dark:bg-dlightGrey container mt-3 h-28 rounded-md bg-lightGrey ">
                <Education data={data} />
              </div>
            </div>
            <div className="dark:bg-dlightGrey col-span-1 gap-1 rounded-md bg-lightGrey">
              <SocialMediaIcons className="w-16 p-2" src={github} />
              <SocialMediaIcons className="w-14 p-2" src={linkedin} />
              <SocialMediaIcons className="w-14 p-2" src={facebook} />
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    )
}
