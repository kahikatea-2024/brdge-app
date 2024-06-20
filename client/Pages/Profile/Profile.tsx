import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import NavBar from '../../components/NavBar/NavBar'
import Avatar from '../../components/UI/Avatar/Avatar'
import ProfileCoverImage from '../../components/UI/ProfileCoverImage/ProfileCoverImage'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons/SocialMediaIcons'
import facebook from '../../../public/images/facebooklogo.png'
import github from '../../../public/images/githublogo.png'
import linkedin from '../../../public/images/linkedinlogo.png'

const bio = 'I live in a Swamp and I do career Mentorship'

export default function Profile() {
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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dfq9q35-97e3227f-9e86-4551-8dd1-e63e36ffd8f2.jpg/v1/fill/w_1280,h_360,q_75,strp/shrek_swamp_background_by_darkmoonanimation_dfq9q35-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvZDM3ODljOGMtMDg3NC00MDdjLWE0NTctMDNiMTQ3ZjU5YjE4XC9kZnE5cTM1LTk3ZTMyMjdmLTllODYtNDU1MS04ZGQxLWU2M2UzNmZmZDhmMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ybm3gLnQhLE_RhooyzeiDr2ah8pcRJNGaFfxwXtLnDM"
          />
          <div className="top-45 left-160 absolute -translate-y-1/2 transform">
            <Avatar
              size="large"
              verified={true}
              className="mb-50 rounded-full border-4 border-extraLightGrey"
              src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
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
              {bio}
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
