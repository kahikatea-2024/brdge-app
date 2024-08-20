import React from 'react'
import { deletePost } from '../../apis/posts'

interface Props {
  id: number | undefined
}

function EditPost(props: Props) {
  async function handleDelete() {
    if (props.id === undefined) {
      console.error('Post ID is undefined')
      return
    }

    try {
      console.log('Deleting post with ID:', props.id)
      await deletePost(props.id)
      console.log('Post deleted successfully')
      // Optionally, you can trigger a re-fetch or update the state here
    } catch (error) {
      console.error('Error deleting post:', error)
      // Optionally, display an error message to the user
    }
  }

  return (
    <button className="deleteBtn" type="button" onClick={handleDelete}>
      Delete
    </button>
  )
}

export default EditPost
