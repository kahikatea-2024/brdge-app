import Avatar from '../UI/Avatar/Avatar'
import PostText from '../UI/PostText/PostText'

import ImagePost from '../UI/ImagePost/ImagePost'
import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { Post } from '../../../models/postFeed'

const username = 'Donkey'

interface PostAttributes extends HtmlHTMLAttributes<HTMLDivElement> {
  PostData: Post
}

export default function FeedPost({
  className,
  PostData,
  ...rest
}: PostAttributes) {
  const { content, post_date, image_url } = PostData
  //temp variables
  const image = 'images/Donkey_(Shrek).jpg'

  const PostStyling = 'mb-4 bg-lightGrey rounded-md'

  return (
    <div className={twMerge(PostStyling, className)}>
      <div className="flex flex-col p-8">
        <div className="mb-2 flex items-center">
          <div className="pr-4 ">
            <Avatar size="medium" src={image} />
          </div>
          <div>
            <p className="text-m text-extraLightGrey">{username}</p>
            <p className="text-xs text-extraLightGrey">{post_date}</p>
          </div>
        </div>
        <div className="text-s text-extraLightGrey">
          <PostText>{content}</PostText>
        </div>
        <div className="">
          <ImagePost className="size-full" src={image_url} />
        </div>
        <div className="pl-10 text-extraLightGrey">Comment</div>
      </div>
    </div>
  )
}
