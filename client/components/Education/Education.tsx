import ExperienceLogo from '../UI/Experience/ExperienceLogo'
import education from '../../../public/images/education.png'

const nameOfPlace = 'Green Orge Tech University'
const positionOrQualification = 'Bachelor Degree Of Mythical Creature Computing'
const location = 'Far Far Away'
const duration = '1986 -  1990'

export default function Education() {
  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={education} />
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
