import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllPosts } from '../apis/posts'

export function usePosts() {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  })
  return { ...query }
}
