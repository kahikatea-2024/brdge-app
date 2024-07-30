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
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'

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
        <div className="bg-darkGrey dark:bg-ddarkGrey">
          <div className="bg-darkGrey pl-64 pr-4 dark:bg-ddarkGrey">
            <button onClick={() => toggleDarkMode()}>
              {!darkMode && <IoSunny size={28} />}
              {darkMode && <IoMoon size={28} color="white" />}
            </button>
          </div>
          <div className="sticky top-0 z-50 pl-4 pr-4 ">
            <NavBar />
          </div>
          <div className="bg-darkGrey dark:bg-ddarkGrey">
            <div className=" bg-darkGreyey mx-auto flex  w-[70%] pt-8 text-center">
              <ProfileCoverImage
                className="h-56 w-full rounded-md object-cover "
                src={data.cover_image}
              />
              <div className="left-160 absolute top-80 -translate-y-1/2 transform pl-4 md:top-56 lg:top-56">
                <Avatar
                  size="large"
                  verified={true}
                  className="mb-50 rounded-full border-4 border-extraLightGrey"
                  src={data.avatar_image}
                />
              </div>
            </div>
            {/* content */}
            <div className="mx-auto mt-4 flex w-[70%] bg-lightGrey text-center dark:bg-dlightGrey">
              {/* Bio */}
              <div className=" rounded-md  p-4 text-center font-sans text-sm text-extraLightGrey dark:text-dextraLightGrey">
                {data.bio}
              </div>
            </div>
            {/* experience */}

            <div className="mx-auto mt-4 grid w-[70%] grid-cols-5 grid-rows-5 gap-4 text-center  ">
              <div className="col-span-5 rounded-md bg-dlightGrey lg:col-span-4">
                <Experience data={data} />
              </div>
              <div className="col-span-5 rounded-md bg-dlightGrey lg:col-span-4 lg:col-start-1 lg:row-start-2">
                <Education data={data} />
              </div>
              <div className="col-span-5 col-start-1 row-start-3 flex justify-around rounded-md bg-lightGrey dark:bg-dlightGrey lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:flex-col lg:items-start">
                <SocialMediaIcons className="w-16 p-2" src={github} />
                <SocialMediaIcons className="w-14 p-2" src={linkedin} />
                <SocialMediaIcons className="w-14 p-2" src={facebook} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
// col-start-5 row-span-1 row-start-1
