import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import NavBar from '../../components/NavBar/NavBar'
import Avatar from '../../components/UI/Avatar/Avatar'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
import ProfileCoverImage from '../../components/UI/ProfileCoverImage/ProfileCoverImage'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons/SocialMediaIcons'
import { useProfile } from '../../hooks/useProfile'
import { useParams } from 'react-router-dom'

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
  const { id } = useParams()
  const { data, isLoading, isError } = useProfile(id as string)
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

  return (
    <div className="relative min-h-screen bg-darkGrey">
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-7 place-content-center ">
        <div className="col-span-1 p-6"></div>
        <div className="col-span-5 mt-2 h-48 items-center gap-2 rounded-md bg-gray-700">
          <ProfileCoverImage
            className="h-full w-full rounded-md object-cover"
            src={data?.cover_image}
          />
          <div className="top-45 left-160 absolute -translate-y-1/2 transform">
            <Avatar
              size="large"
              verified={true}
              className="mb-50 rounded-full border-4 border-extraLightGrey"
              src={data?.avatar_image}
            />
          </div>
        </div>
        <div className="col-span-1 p-6"></div>
      </div>
      <div className="content grid grid-cols-7 gap-4 p-4">
        <div className="col-span-1"></div>
        <div className="col-span-5 gap-2">
          <div className="container h-28 rounded-md bg-lightGrey p-6">
            <p className="pb-0 pl-0  text-center font-mono text-sm text-extraLightGrey ">
              {data?.bio}
            </p>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="content grid grid-cols-7 gap-4 p-4">
        <div className="col-span-1"></div>
        <div className="col-span-4 gap-1">
          <div className="container h-28  rounded-md bg-lightGrey ">
            <Experience />
          </div>
          <div className="container mt-3 h-28 rounded-md bg-lightGrey ">
            <Education />
          </div>
        </div>
        <div className="col-span-1 gap-1 rounded-md bg-lightGrey">
          <SocialMediaIcons className="w-16 p-2" src={github} />
          <SocialMediaIcons className="w-14 p-2" src={linkedin} />
          <SocialMediaIcons className="w-14 p-2" src={facebook} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}
