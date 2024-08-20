import request from 'superagent'
import { Comments } from '../../models/comments'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export interface AddComment {
  body: string
  parent_id: number | null
}
export interface UpdateComment {
  id: number
  body: string
  user_id: number
}

const rootUrl = '/api/v1/comments'

export async function getAllComments(): Promise<Comments[]> {
  const res = await request.get(rootUrl)
  return res.body.comments as Comments[]
}

// Fetch comment count by post ID
export async function getCommentsByPostId(id: number): Promise<Comments[]> {
  try {
    const res = await request.get(`${rootUrl}/posts/${id}`)
    return res.body as Comments[]
  } catch (error) {
    console.error('Error fetching comments by post ID:', error)
    throw error
  }
}

// Fetch comment count by post ID
export async function getCommentCountByPostId(id: number): Promise<number> {
  try {
    const res = await request.get(`${rootUrl}/posts/${id}/count`)
    return res.body.count as number
  } catch (error) {
    console.error('Error fetching comment count by post ID:', error)
    throw error
  }
}
// Add a new comment
export async function addComment(
  comment: string,
  parent_id: number | null = null,
  feed_post_id: number,
) {
  const newComment = {
    body: comment,
    parent_id,
    user_id: 1, // Or obtain this from context/session
    created_at: new Date().toISOString(),
    feed_post_id,
  }

  const res = await request.post(rootUrl).send(newComment)
  return res.body
}

// Delete a comment
export async function deleteComment(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
// Hook for deleting a comment
export function useDeleteComment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await deleteComment(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
    onError: (error: any) => {
      console.error('Failed to delete comment', error)
    },
  })
}

// Hook for updating a comment
export function useUpdateComment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateComment) => {
      const { id, body, user_id } = data
      await request.patch(`${rootUrl}/${id}`).send({ body, user_id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
    onError: (error: any) => {
      console.error('Failed to update comment', error)
    },
  })
}
