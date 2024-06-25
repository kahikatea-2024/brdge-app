import { Profile } from '../../../models/profile'
import { useEducation } from '../../hooks/useEducation'
// import EditIcon from '../UI/EditIcon/EditIcon'
import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'

interface EducationPlaceholder {
  duration: string
  position_or_qualification: string
  logo_url: string
  name_of_place: string
  location: string
}

const placeholderData: EducationPlaceholder = {
  duration: 'Please add the duration',
  position_or_qualification: 'Please add qualification',
  logo_url: '../public/images/education.png',
  name_of_place: 'Please add Name of Place',
  location: 'Please add location',
}
interface Props {
  data: Profile
}

export default function Education(propsData: Props) {
  // number in the params of UseEducation is the Id of the user please this for changing the data

  const { data, isLoading, isError } = useEducation(`${propsData.data.user_id}`)

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
  const logoUrl = '../public/images/education.png'
  // If data does not exsit then display placeholderData
  const educationData = data[0] || placeholderData

  return (
    <>
      <div className="dark:bg-dlightGrey bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 ml-2 " src={logoUrl} />
            <div className="dark:text-dextraLightGrey flex flex-col pl-5 pt-4 font-sans text-xl text-extraLightGrey">
              <p>{educationData.position_or_qualification}</p>
              <p className="pb-0 pl-0 text-sm">{educationData.name_of_place}</p>
              <p className="pb-0 pl-0 text-sm">{educationData.location}</p>
              <p className="pb-2 pl-0 text-sm">{educationData.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
