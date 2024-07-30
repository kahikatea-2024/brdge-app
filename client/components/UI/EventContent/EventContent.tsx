import { useState } from 'react'

const events = [
  {
    name: 'Fire-breathing Fullstack',
    date: '15 Jun 2024',
    description:
      'Dragon is taking a break from guarding the castle to help you tackle database management with fiery enthusiasm. Learn to set up, maintain, and secure your databases without getting burned by common pitfalls.',
    image: 'images/Dragon.jpg',
  },
  {
    name: "Donkey's Dynamic Debugging Day",
    date: '24 Aug 2024',
    description:
      'Join Donkey as he bounces around trying to debug his code. Expect lots of laughs as he talks to his computer, dances around the room, and tries the most ridiculous solutions. Learn valuable debugging techniques amidst the chaos!',
    image: 'images/DebugDonkey.jpg',
  },
  {
    name: 'Fiona’s Deployment Day',
    date: '27 Oct 2024',
    description:
      'Fiona takes you through the process of deploying a fullstack application, from her swamp to the server. Watch out for her practical tips, swampy metaphors, and a few unexpected animal cameos.',
    image: 'images/Fionade.jpg',
  },
]

export default function Events() {
  const [currentIndex, setCurrentindex] = useState(0)

  const showNextEvent = () => {
    setCurrentindex((prevIndex) => (prevIndex + 1) % events.length)
  }
  const showPrevEvent = () => {
    setCurrentindex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length,
    )
  }

  const currentEvent = events[currentIndex]
  return (
    <>
      <div className="items hidden flex-col lg:block">
        <div>
          {events.map((event, index) => (
            <div key={index} className="flex flex-col pt-4">
              <div className="flex flex-col items-center">
                <img
                  src={event.image}
                  className="size-44 pl-2"
                  alt={event.name}
                />
                <div className="flex flex-col p-2 font-sans text-xl text-extraLightGrey dark:text-dextraLightGrey">
                  <h2 className="pt-2">{event.name}</h2>
                  <p className="p-0 text-sm">{event.date}</p>
                </div>
              </div>
              <p className="p-2 pb-8 font-sans text-sm text-extraLightGrey dark:text-dextraLightGrey">
                {event.description}
              </p>
              {index < events.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>

      {/* SMALL SCREENS */}
      <div className="block w-full flex-col items-center lg:hidden">
        {/* Event section */}
        <div className="flex w-full">
          <div className="flex flex-col items-center">
            <img
              src={currentEvent.image}
              className="h-40 w-auto rounded-t-md object-cover"
              alt={currentEvent.name}
            />
            <div className="flex flex-col p-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {currentEvent.name}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {currentEvent.date}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {currentEvent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mb-2 mt-2 flex w-full max-w-lg justify-between px-4">
          <button
            onClick={showPrevEvent}
            className=" text-3xl text-primary hover:bg-gray-400"
          >
            &lt;&lt;&lt;
          </button>
          <button
            onClick={showNextEvent}
            className="text-3xl text-primary hover:bg-gray-400"
          >
            &gt;&gt;&gt;
          </button>
        </div>
      </div>
    </>
  )
}
