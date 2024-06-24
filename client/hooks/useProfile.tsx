import { useQuery } from '@tanstack/react-query'
import { fetchProfile } from '../apis/profile'
import { useAuth0 } from '@auth0/auth0-react'

export function useProfile(id: string) {
  const query = useQuery({
    queryKey: ['profile', id],
    queryFn: () => fetchProfile(id),
  })
  return { ...query }
}

export function useCurrentUser() {
  const { user } = useAuth0()
  //console.log('useCurrentUser: ', user)
  const query = useQuery({
    queryKey: ['currentUser', user],
    queryFn: () => fetchProfile(user?.sub as string),
    enabled: !!user,
  })
  return { ...query }
}
