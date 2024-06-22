import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../apis/profile'

export function useProfile(id: string) {
  const query = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getProfile(id),
  })
  return { ...query }
}

