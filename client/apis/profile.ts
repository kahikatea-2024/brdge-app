import request from 'superagent'
import { Profile } from '../../models/profile'

const rootUrl = '/api/v1/profiles'

export async function fetchProfile(id: string): Promise<Profile> {
  const res = await request.get(rootUrl + `/${id}`)
  if (res.body === undefined) {
    return (await request.get(rootUrl + `/1`)).body
  }
  return res.body
}

export async function fetchUserProfileByUsername(
  userName: string,
): Promise<Profile> {
  const res = await request.get(rootUrl + `/search/${userName}`)
  return res.body
}
export async function fetchUserProfileByEmail(email: string): Promise<Profile> {
  const res = await request.get(rootUrl + `/searchEmail/${email}`)
  return res.body
}
export async function getExperience(id: string) {
  return await request.get(rootUrl + `/${id}/experience`).then((res) => {
    return res.body
  })
}

export async function getEducation(id: string) {
  return await request.get(rootUrl + `/${id}/education`).then((res) => {
    return res.body
  })
}
