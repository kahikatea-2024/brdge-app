import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import {
  getAllComments,
  getCommentsByPostId,
  getPosts,
  getCommentCountByPostId,
} from '../apis/comments.ts'

import { Comments } from '../../models/comments.ts'

// Custom hook for mutation

export function useCommentsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  queryKey: string[],
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      // Invalidate queries associated with the mutation
      queryClient.invalidateQueries({ queryKey })
    },
  })

  return mutation
}

// Fetch comments by post ID
export function useCommentByPostId(postId: number) {
  const query = useQuery<Comments[]>({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
  })
  return {
    ...query,
  }
}

// Fetch comment count by post ID
export function useCommentCount(postId: number) {
  const query = useQuery<number>({
    queryKey: ['commentCount', postId],
    queryFn: () => getCommentCountByPostId(postId),
  })

  return {
    ...query,
  }
}

// Fetch all comments
export function useComments() {
  const query = useQuery({
    queryKey: ['comments'],
    queryFn: getAllComments,
  })
  return {
    ...query,
  }
}
