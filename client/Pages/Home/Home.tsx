import NavBar from '../../components/Header/NavBar'
import PostComponent from '../../components/PostComponent/PostComponent'
import FeedPost from '../../components/FeedPost/FeedPost'

export default function Home() {
  return (
    <div className="gap-4 bg-darkGrey">
      <NavBar />
      <div className="content grid grid-cols-4 gap-4 p-4">
        <div className="col-span-1 rounded-md bg-lightGrey">Event content</div>
        <div className="col-span-2 gap-2">
          <PostComponent />
          <FeedPost className="mt-4" />
        </div>
        <div className="col-span-1 rounded-md bg-lightGrey">Ad content</div>
      </div>
    </div>
  )
}
