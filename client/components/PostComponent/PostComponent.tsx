import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import PostField from '../UI/Text field/PostField'

export default function PostComponent() {
  return (
    <>
      <div className="flex h-auto rounded-md bg-lightGrey">
        <div className="pl-4  pt-4">
          <Avatar
            size="medium"
            src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
          />
        </div>
        <div className="flex w-full flex-col p-4">
          <PostField
            className="w-full rounded-xl bg-darkGrey p-4 text-extraLightGrey  focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to share?"
          />
          <div className="self-end pt-2">
            <Button className="text-sm">Post</Button>
          </div>
        </div>
      </div>
    </>
  )
}
