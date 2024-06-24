import { useExperience } from '../../hooks/useExperience'
import { useCurrentUserExp } from '../../hooks/useProfile'
import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'

interface ExperiencePlaceholder {
  duration: any
  position_or_qualification: any
  logo_url: any
  name_of_place: any
  location: any
}
//Mock data
const placeholderData: ExperiencePlaceholder = {
  duration: 'Please add the duration',
  position_or_qualification: 'Please add experience',
  logo_url: 'images/work.png',
  name_of_place: 'Please add Name of Place',
  location: 'Please add location',
}

export default function Experience() {
  const { data, isLoading, isError } = useCurrentUserExp()
  console.log(data)
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
  const logoUrl = 'images/education.png'
  // If data does not exsit then display placeholderData
  const experienceData = data || placeholderData

  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={logoUrl} />
            <div className="flex flex-col pl-4 pt-4 font-mono text-xl text-extraLightGrey">
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
