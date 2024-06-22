import { useQuery } from "@tanstack/react-query"
import { getEducation } from "../apis/profile"

export function useEducation(id: string) {
  const query = useQuery({
    queryKey: ['education', id],
    queryFn: () => getEducation(id),
  })
  return { ...query }
}