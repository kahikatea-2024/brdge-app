import { useExperience } from '../../hooks/useExperience'
import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import { Props, placeholderData } from './Experience'

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
  const logoUrl = '../public/images/work.png'
  // const logoUrl2 = '../public/images/blackwork.png'
  // If data does not exsit then display placeholderData
  const [darkMode, setDarkMode] = useState(false)

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const experienceData = data[0] || placeholderData

  return (
    <>
      <div className="bg-lightGrey dark:bg-dlightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 ml-3" src={logoUrl} />
            <div className="flex flex-col pl-4 pt-4 font-mono text-xl text-extraLightGrey dark:text-dextraLightGrey">
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
