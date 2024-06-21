import request from 'superagent'
import { Post } from '../../models/postFeed'

const rootUrl = '/api/v1'

export function getAllPosts(): Promise<Post[]> {
  return request.get(rootUrl + '/postFeed').then((res) => {
    return res.body
  })
}
