import Avatar from '../UI/Avatar/Avatar'
import PostText from '../UI/PostText/PostText'

import ImagePost from '../UI/ImagePost/ImagePost'
import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { Post } from '../../../models/postFeed'
import CommentIcon from '../UI/CommentIcon/CommentIcon'

import DisqusThread from '../DisqusThread'
import { Link } from 'react-router-dom'
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
          <CommentIcon className="h-14 w-14" src={comImage} />
          <div className="pt-5 text-extraLightGrey dark:text-dextraLightGrey">
            <p>Comment</p>
          </div>
        </div>
        <div>
          <DisqusThread
            url={'http://localhost:5173/'}
            identifier={'HomePage'}
          />
        </div>
      </div>
    </div>
  )
}
