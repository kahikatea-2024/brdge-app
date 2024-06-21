import ExperienceLogo from '../UI/Experience/ExperienceLogo'

const educationData = {
  duration: '1986 -  1990',
  position_or_qualification: 'Bachelor Of Mythical Creature Computing',
  logo_url: 'images/education.png',
  name_of_place: 'Green Orge Tech University',
  location: 'Far Far Away',
}
export default function Education() {
  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={educationData.logo_url} />
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
