import { twMerge } from 'tailwind-merge'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import PostField from '../UI/Text field/PostField'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPost } from '../../apis/posts'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function PostComponent() {
  const ComponentStyles =
    'mb-4 flex h-auto rounded-md bg-lightGrey dark:bg-dlightGrey'

  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  interface MutationProps {
    post: string
    image: string
  }
  const addPostMutation = useMutation({
    mutationFn: async (props: MutationProps) => {
      const token = await getAccessTokenSilently()
      return addPost(props.post, token, props.image)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      })
    },
  })

  const [form, setForm] = useState('')
  const [image, setImage] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setForm(event.target.value)
  }
  function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addPostMutation.mutate({ post: form, image })
    setForm('')
    setImage('')
  }
  return (
    <div className={twMerge(ComponentStyles)}>
      <div className="pl-4  pt-4">
        <Avatar
          size="medium"
          src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
        />
      </div>
      <div className="flex w-full flex-col p-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <PostField
            onChange={(e) => handleChange(e)}
            className=" w-full rounded-xl bg-darkGrey p-4 text-extraLightGrey focus:ring-2 focus:ring-blue-500 dark:bg-ddarkGrey dark:text-dextraLightGrey"
            placeholder="What do you want to share?"
            value={form}
          />
          <input
            onChange={(e) => handleChangeImage(e)}
            className=" w-full rounded-xl bg-darkGrey p-4 text-xs text-extraLightGrey focus:ring-2 focus:ring-blue-500 dark:bg-ddarkGrey dark:text-dextraLightGrey"
            placeholder="Please paste the image link"
            value={image}
          ></input>
          <div className="self-end pt-2">
            <Button className="text-sm">Post</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
