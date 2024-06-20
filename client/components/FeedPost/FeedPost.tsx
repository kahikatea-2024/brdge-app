import Avatar from '../UI/Avatar/Avatar'
import PostText from '../UI/PostText/PostText'
import image from '../../../public/images/Donkey_(Shrek).jpg'
import ImagePost from '../UI/ImagePost/ImagePost'
import postImage from '../../../public/images/Screenshot from 2024-06-20 15-06-10.png'
import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const username = 'Donkey'

interface FeedAttributes extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function FeedPost({ className, ...rest }: FeedAttributes) {
  return (
    <div className={twMerge(className)}>
      <div className="flex flex-col rounded-md bg-lightGrey p-8">
        <div className="mb-2 flex items-center">
          <div className="pr-4">
            <Avatar size="medium" src={image} />
          </div>
          <p className="text-m text-extraLightGrey">{username}</p>
        </div>
        <div className="text-s text-extraLightGrey">
          <PostText>
            {' '}
            Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess
            what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas
            cracking algorithms left and right, and Im still tryin to figure out
            if &quot;honk&quot; counts as code. Join us for pixel-powered fun
            and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles
            #SwampyTechAdventure
          </PostText>
        </div>
        <div className="">
          <ImagePost className="size-full" src={postImage} />
        </div>
        <div className="pl-10 text-extraLightGrey">Comment</div>
      </div>
    </div>
  )
}
