import { Profile } from '../../../models/profile'
import { useExperience } from '../../hooks/useExperience'
import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'

interface ExperiencePlaceholder {
  duration: string
  position_or_qualification: string
  logo_url: string
  name_of_place: string
  location: string
}
//Mock data
const placeholderData: ExperiencePlaceholder = {
  duration: 'Please add the duration',
  position_or_qualification: 'Please add experience',
  logo_url: 'images/work.png',
  name_of_place: 'Please add Name of Place',
  location: 'Please add location',
}
interface Props {
  data: Profile
}

export default function Experience(propsData: Props) {
  const { data, isLoading, isError } = useExperience(
    `${propsData.data.user_id}`,
  )

  if (isLoading) {
    return (
      <span>
        <LoadingSpinner className="size-20" />
      </span>
    )
  }

  if (isError) {
    return <span>Error...</span>
  }
  const logoUrl = '/images/work.png'
  const logoUrl2 = '/images/blackwork.png'
  // If data does not exsit then display placeholderData
  const experienceData = data[0] || placeholderData

  return (
    <>
      <div className="bg-lightGrey dark:bg-dlightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={logoUrl} />
            <div className="flex flex-col pl-4 pt-4 font-sans text-xl text-extraLightGrey dark:text-dextraLightGrey">
              <p>{experienceData.position_or_qualification}</p>
              <p className="pb-0 pl-0 text-sm">
                {experienceData.name_of_place}
              </p>
              <p className="pb-0 pl-0 text-sm">{experienceData.location}</p>
              <p className="pb-2 pl-0 text-sm">{experienceData.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
