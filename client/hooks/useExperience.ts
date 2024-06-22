import { useQuery } from '@tanstack/react-query'
import { getExperience } from '../apis/profile'

export function useExperience(id: string) {
  const query = useQuery({
    queryKey: ['experience', id],
    queryFn: () => getExperience(id),
  })
  return { ...query }
}
