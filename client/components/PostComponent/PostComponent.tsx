import { twMerge } from 'tailwind-merge'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import PostField from '../UI/Text field/PostField'

export default function PostComponent() {
  const ComponentStyles =
    'mb-4 flex h-auto rounded-md bg-lightGrey dark:bg-dlightGrey'
  return (
    <div className={twMerge(ComponentStyles)}>
      <div className="pl-4  pt-4">
        <Avatar
          size="medium"
          src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
        />
      </div>
      <div className="flex w-full flex-col p-4">
        <PostField
          className=" dark:bg-ddarkGrey w-full rounded-xl bg-darkGrey p-4 text-extraLightGrey focus:ring-2 focus:ring-blue-500 dark:text-extraLightGrey"
          placeholder="What do you want to share?"
        />
        <div className="self-end pt-2">
          <Button className="text-sm">Post</Button>
        </div>
      </div>
    </div>
  )
}
