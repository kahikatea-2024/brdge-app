import NavBar from '../../components/NavBar/NavBar'
import PostComponent from '../../components/PostComponent/PostComponent'
import FeedPost from '../../components/FeedPost/FeedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from '../../components/Authenticated'

export default function Home() {
  const { user } = useAuth0()
  return (
    <div className="gap-4 bg-darkGrey">
      <NavBar />
      <div className="content grid grid-cols-4 gap-4 p-4">
        <div className="col-span-1 rounded-md bg-lightGrey">Event content</div>
        <div className="col-span-2 gap-2">
          <IfAuthenticated>
            <PostComponent />
          </IfAuthenticated>
          <FeedPost className="mt-4" />
        </div>
        <div className="col-span-1 rounded-md bg-lightGrey">Ad content</div>
      </div>
    </div>
  )
}
