import ExperienceLogo from '../UI/Experience/ExperienceLogo'

//Mock data
const experienceData = {
  duration: '2021 to present',
  position_or_qualification: 'Animal Control Operator',
  logo_url: 'images/work.png',
  name_of_place: 'Circus',
  location: 'Far Far Away',
}

export default function Experience() {
  return (
    <>
      <div className="bg-lightGrey">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <ExperienceLogo className="w-16 " src={experienceData.logo_url} />
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
