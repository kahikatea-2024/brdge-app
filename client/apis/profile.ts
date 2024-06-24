import request from 'superagent'
import { Profile, UserBackground } from '../../models/profile'

const rootUrl = '/api/v1/profiles'

export async function getUserProfile(id: string): Promise<Profile> {
  console.log('getUserProfile db func: ', id)
  return await request
    .post(rootUrl)
    .send({ auth0Id: { id } })
    .then((res) => {
      return res.body
    })
}

export async function getUserExperience(id: string): Promise<UserBackground> {
  console.log('getUserExperience db func: ', id)
  return await request
    .post(rootUrl)
    .send({ auth0Id: { id } })
    .then((res) => {
      return res.body
    })
}

// export async function getUserEducation(id: string): Promise<Profile> {
//   console.log('getUserEducation db func: ', id)
//   return await request
//     .post(rootUrl)
//     .send({ auth0Id: { id } })
//     .then((res) => {
//       return res.body
//     })
// }


export async function getProfile(id: string) {
  return await request.get(rootUrl + `/${id}`).then((res) => {
    return res.body
  })
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
