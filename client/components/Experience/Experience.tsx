import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import work from '../../../public/images/work.png'

const nameOfPlace = 'Get out of My Swamp Enterprises'
const positionOrQualification = 'Swampy Manager'
const location = 'Far Far Away'
const duration = '2021 -  Current'

export default function Experience() {
  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={work} />
            <div className="flex flex-col pl-4 pt-4 font-mono text-xl text-extraLightGrey">
              <p>{positionOrQualification}</p>
              <p className="pb-0 pl-0 text-sm">{nameOfPlace}</p>
              <p className="pb-0 pl-0 text-sm">{location}</p>
              <p className="pb-2 pl-0 text-sm">{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
