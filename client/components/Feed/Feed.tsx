import FeedPost from '../FeedPost/FeedPost'

import { Post } from '../../../models/postFeed'

interface FeedProps {
  Posts: Post[]
}

export default function Feed(props: FeedProps) {
  return (
    <>
      {props.Posts ? (
        props.Posts.map((postData, index) => {
          return <FeedPost key={index} PostData={postData} />
        })
      ) : (
        <span>Loading data...</span>
      )}
    </>
  )
}
