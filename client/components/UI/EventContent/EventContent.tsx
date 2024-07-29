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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <button
        className="p-4 text-xl text-extraLightGrey dark:text-dextraLightGrey md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      <div className={`md:flex md:flex-col ${isMenuOpen ? 'block' : 'hidden'}`}>
        {events.map((event, index) => (
          <div key={index} className="flex flex-col pt-10">
            <div className="flex flex-row">
              <img
                src={event.image}
                className="size-44 pl-2"
                alt={event.name}
              />
              <div className="flex flex-col p-2 font-sans text-xl text-extraLightGrey dark:text-dextraLightGrey">
                <h2 className="pt-8">{event.name}</h2>
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
  )
}
