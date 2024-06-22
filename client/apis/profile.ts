import request from 'superagent'

const rootUrl = '/api/v1/profiles'

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

