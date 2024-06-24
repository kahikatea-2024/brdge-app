import { twMerge } from 'tailwind-merge'
import Avatar from '../UI/Avatar/Avatar'
import Button from '../UI/Button/Button'
import PostField from '../UI/Text field/PostField'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPost } from '../../apis/posts'
import { useState } from 'react'

export default function PostComponent() {
  const queryClient = useQueryClient()
  const addPostMutation = useMutation({
    mutationFn: (post: string) => addPost(post),
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
    event.preventDefault
    addPostMutation.mutate(form)
  }
  const ComponentStyles = 'mb-4 flex h-auto rounded-md bg-lightGrey'
  return (
    <div className={twMerge(ComponentStyles)}>
      <div className="pl-4  pt-4">
        <Avatar
          size="medium"
          src="https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg"
        />
      </div>
      <div className="flex w-full flex-col p-4">
        <form onSubmit={handleSubmit}>
          <PostField
            onChange={(e) => handleChange(e)}
            className="w-full rounded-xl bg-darkGrey p-4 text-extraLightGrey  focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to share?"
          />
          <div className="self-end pt-2">
            <Button className="text-sm">Post</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
