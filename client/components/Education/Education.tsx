import { useEducation } from '../../hooks/useEducation'
import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'

interface EducationPlaceholder {
  duration: any
  position_or_qualification: any
  logo_url: any
  name_of_place: any
  location: any
}

const placeholderData: EducationPlaceholder = {
  duration: 'Please add the duration',
  position_or_qualification: 'Please add quailfiction',
  logo_url: 'images/education.png',
  name_of_place: 'Please add Name of Place',
  location: 'Please add location',
}

export default function Education() {
  // number in the params of UseEducation is the Id of the user please this for changing the data

  const { data, isLoading, isError } = useEducation('5')
  console.log(data)
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
  const logoUrl = 'images/education.png'
  // If data does not exsit then display placeholderData
  const educationData = data[0] || placeholderData

  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={logoUrl} />
            <div className="flex flex-col pl-4 pt-4 font-mono text-xl text-extraLightGrey">
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
