import request from 'superagent'

const rootUrl = '/api/v1/profiles'

export async function getProfile(id: string) {
  return await request.get(rootUrl + `/${id}`).then((res) => {
    return res.body
  })
}
