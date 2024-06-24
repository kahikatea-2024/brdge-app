export interface User {
  user_id: number
  username: string
  first_name: string
  last_name: string
  join_date: string
  birth_date: string
  user_email: string
  is_mentor: boolean
}

export interface Profile {
  profile_id: number
  user_id: number
  bio: string
  avatar_image: string
  cover_image: string
  location: string
  website: string
}
