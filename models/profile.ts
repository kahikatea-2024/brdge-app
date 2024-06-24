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
  location: string
  website: string
}

export interface UserBackground {
  user_background_id: number;
  user_id: number;
  background_id: number;
  duration: string;
  position_or_qualification: string;
  isExperience: number;
  is_education: number;
  is_experience: number;
  logo_url: string;
  name_of_place: string;
  location: string | null;
}


export interface Education {

}