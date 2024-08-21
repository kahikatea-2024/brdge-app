import Avatar from '../UI/Avatar/Avatar'
import PostText from '../UI/PostText/PostText'

import ImagePost from '../UI/ImagePost/ImagePost'
import { HtmlHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Post } from '../../../models/postFeed'
import CommentIcon from '../UI/CommentIcon/CommentIcon'

import DisqusThread from '../DisqusThread'
import { Link } from 'react-router-dom'
import { useCommentCount } from '../../hooks/useComments'
import { usePosts } from '../../hooks/usePosts'
import Comments from '../comments/Comments'
import c1 from '../../../public/images/c1.png'

const comImage = 'images/comment-icon.png'

interface PostAttributes extends HtmlHTMLAttributes<HTMLDivElement> {
  postData: Post
}

export default function FeedPost({
  className,
  postData,
  ...rest
}: PostAttributes) {
  const { avatar_image, username, content, timestamp, image_url } = postData
  //temp variables

  const BaselineStyling = 'mb-4 bg-lightGrey dark:bg-dlightGrey rounded-md'

  const { data, error, isLoading } = usePosts()
  const [activePostId, setActivePostId] = useState<number | null>(null) // Track active post

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading posts: {error.message}</div>

  const handleCommentsToggle = (feed_post_id: number) => {
    // If the clicked post is already active, toggle it off; otherwise, set it as active
    setActivePostId((prevId) => (prevId === feed_post_id ? null : feed_post_id))
  }

  // Component to display comment count
  function CommentCount({ feed_post_id }: { feed_post_id: number }) {
    const {
      data: commentCount,
      isLoading,
      error,
    } = useCommentCount(feed_post_id)

    if (isLoading) return <span>Loading comment count...</span>
    if (error) return <span>Error loading comment count</span>

    return <span className="text-primary ">Comments: {commentCount || 0}</span>
  }

  return (
    <div className={twMerge(BaselineStyling, className)} {...rest}>
      <div className="flex flex-col p-2 lg:p-8">
        <div className="mb-2 flex items-center">
          <div className="pr-4 ">
            <Link to={`../profiles/${postData.user_id}`}>
              <Avatar size="medium" src={avatar_image} />
            </Link>
          </div>
          <div>
            <p className="text-m text-extraLightGrey dark:text-dextraLightGrey">
              {username}
            </p>
            <p className="text-xs text-extraLightGrey dark:text-dextraLightGrey">
              {timestamp}
            </p>
          </div>
        </div>
        <div className="text-s m-3 text-extraLightGrey dark:text-dextraLightGrey">
          <PostText>{content}</PostText>
        </div>
        <div className="">
          {image_url && <ImagePost className="size-full" src={image_url} />}
        </div>
        <div className="flex-rpw flex pt-2">
          {/* <CommentIcon className="h-14 w-14" src={comImage} />
          <div className="pt-5 text-extraLightGrey dark:text-dextraLightGrey">
            <p>Comment</p>
          </div> */}
        </div>
        <div>
          {/* <DisqusThread
            url={'http://localhost:5173/'}
            identifier={'HomePage'}
          /> */}

          <button
            className="flex cursor-pointer rounded-md border-none bg-transparent p-2 hover:scale-105 hover:bg-gray-200"
            onClick={() => handleCommentsToggle(postData.feed_post_id)}
          >
            <img
              src={
                activePostId === postData.feed_post_id
                  ? '/images/d-c2.png'
                  : '/images/d-c1.png'
              }
              alt={
                activePostId === postData.feed_post_id
                  ? 'Hide Comments'
                  : 'Show Comments'
              }
              className="h-6 w-6"
            />

            <CommentCount feed_post_id={postData.feed_post_id} />
          </button>
          {activePostId === postData.feed_post_id && (
            <Comments currentUserId={1} feed_post_id={postData.feed_post_id} />
          )}
        </div>
      </div>
    </div>
  )
}
