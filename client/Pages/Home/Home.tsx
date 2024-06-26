import NavBar from '../../components/NavBar/NavBar'
import PostComponent from '../../components/PostComponent/PostComponent'
import Feed from '../../components/Feed/Feed'

import { IfAuthenticated } from '../../components/Authenticated'
import { usePosts } from '../../hooks/usePosts'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
import Ad from '../../components/UI/Ad/Ad'
import EventContent from '../../components/UI/EventContent/EventContent'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const { data, isLoading, isError } = usePosts()

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

  // Mock data
  //   const mockPost = {
  //     feed_post_id: 1,
  //     user_id: 1,
  //     content: `Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess
  //                 what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas
  //                 cracking algorithms left and right, and Im still tryin to figure out
  //                 if &quot;honk&quot; counts as code. Join us for pixel-powered fun
  //                 and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles
  //                 #SwampyTechAdventure`,
  //     timestamp: '04 July',
  //     image_url:
  //       'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  //   }

  //   const PostArray = [mockPost, mockPost, mockPost]

  return (
    <div className={`${darkMode && 'dark'}`}>
      <button
        onClick={toggleDarkMode}
        className="absolute left-8 top-24 z-50 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black"
      >
        {darkMode ? 'LHT' : 'DRK'}
      </button>
      <div className="gap-4 bg-darkGrey dark:bg-ddarkGrey">
        <div className="sticky top-0 z-50  pl-4 pr-4">
          <NavBar />
        </div>
        <div className="content grid grid-cols-4 gap-4 p-4">
          <div className="col-span-1 rounded-md bg-lightGrey dark:bg-dlightGrey ">
            <div className="p-4 text-center font-mono text-3xl text-extraLightGrey dark:text-dextraLightGrey">
              Upcoming Events
            </div>
            <div>
              <EventContent />
            </div>
          </div>
          <div className="col-span-2 gap-2">
            <IfAuthenticated>
              <PostComponent />
            </IfAuthenticated>
            {data && <Feed posts={data} />}
          </div>
          <div className="">
            <Ad />
          </div>
        </div>
      </div>
    </div>
  )
}
