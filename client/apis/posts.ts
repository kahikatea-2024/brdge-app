import request from 'superagent'
import { Post } from '../../models/postFeed'

export interface AddedPost {
  content: string
  image_url: string
}
const rootUrl = '/api/v1'

export function getAllPosts(): Promise<Post[]> {
  return request.get(rootUrl + '/postFeed').then((res) => {
    return res.body
  })
}

export async function addPost(post: string, token: string, image: string) {
  const newPost: AddedPost = {
    content: post,
    image_url: image,
  }
  await request
    .post(rootUrl + '/postFeed')
    .send(newPost)
    .auth(token, { type: 'bearer' })
}
