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
  const addPostMutation = useMutation({
    mutationFn: async (post: string) => {
      const token = await getAccessTokenSilently()
      return addPost(post, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      })
    },
  })

  const [form, setForm] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setForm(event.target.value)
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addPostMutation.mutate(form)
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
            className=" w-full rounded-xl bg-darkGrey p-4 text-extraLightGrey focus:ring-2 focus:ring-blue-500 dark:bg-ddarkGrey dark:text-extraLightGrey"
            placeholder="What do you want to share?"
            value={form}
          />
          <div className="self-end pt-2">
            <Button className="text-sm">Post</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
