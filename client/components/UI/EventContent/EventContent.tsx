// Dynamic one:

// const EventName = 'Fire-breathing Fullstack'
// const date = '15 Jun 2024'
// const description =
//   'Dragon is taking a break from guarding the castle to help you tackle database management with fiery enthusiasm. Learn to set up, maintain, and secure your databases without getting burned by common pitfalls.'
// const image = 'images/Dragon.jpg'

// export default function Events() {
//   return (
//     <>
//       <div className="flex flex-col">
//         <div className="flex flex-row">
//           <img src={image} className="size-44 pl-2"></img>
//           <div className="flex flex-col p-2 font-mono text-xl text-extraLightGrey ">
//             <h2 className="pt-8">{EventName}</h2>
//             <p className="p-0 text-sm">{date}</p>
//           </div>
//         </div>
//       </div>
//       <p className="p-4  font-mono text-sm text-extraLightGrey">
//         {description}
//       </p>
//     </>
//   )
// }

//HardCoding:

const EventName = 'Fire-breathing Fullstack'
const date = '15 Jun 2024'
const description =
  'Dragon is taking a break from guarding the castle to help you tackle database management with fiery enthusiasm. Learn to set up, maintain, and secure your databases without getting burned by common pitfalls.'
const image = 'images/Dragon.jpg'

const EventName2 = "Donkey's Dynamic Debugging Day"
const date2 = '24 Aug 2024'
const description2 =
  'Join Donkey as he bounces around trying to debug his code. Expect lots of laughs as he talks to his computer, dances around the room, and tries the most ridiculous solutions. Learn valuable debugging techniques amidst the chaos!'
const image2 = 'images/DebugDonkey.jpg'

const EventName3 = 'Fiona’s Deployment Day'
const date3 = '27 Oct 2024'
const description3 =
  'Fiona takes you through the process of deploying a fullstack application, from her swamp to the server. Watch out for her practical tips, swampy metaphors, and a few unexpected animal cameos.'
const image3 = 'images/Fionade.jpg'

export default function Events() {
  return (
    <>
      <div className="pt- 10 flex flex-col">
        <div className="flex flex-row">
          <img src={image} className="size-44 pl-2"></img>
          <div className="flex flex-col p-2 font-mono text-xl text-extraLightGrey ">
            <h2 className="pt-8">{EventName}</h2>
            <p className="p-0 text-sm">{date}</p>
          </div>
        </div>
      </div>
      <p className="p-2 pb-8 font-mono text-sm text-extraLightGrey">
        {description}
      </p>
      <hr />
      <div className="flex flex-col pt-10">
        <div className="flex flex-row">
          <img src={image2} className="size-44 pl-2"></img>
          <div className="flex flex-col p-2 font-mono text-xl text-extraLightGrey ">
            <h2 className="pt-8">{EventName2}</h2>
            <p className="p-0 text-sm">{date2}</p>
          </div>
        </div>
      </div>
      <p className="p-2 pb-8 font-mono text-sm text-extraLightGrey">
        {description2}
      </p>

      <hr />
      <div className="flex flex-col pt-10">
        <div className="flex flex-row">
          <img src={image3} className="size-44 pl-2"></img>
          <div className="flex flex-col p-2 font-mono text-xl text-extraLightGrey ">
            <h2 className="pt-8">{EventName3}</h2>
            <p className="p-0 text-sm">{date3}</p>
          </div>
        </div>
      </div>
      <p className="p-2  font-mono text-sm text-extraLightGrey">
        {description3}
      </p>
    </>
  )
}
