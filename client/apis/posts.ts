import request from 'superagent'
import { Post } from '../../models/postFeed'

export interface AddedPost {
  content: string
  image_url?: string
}
const rootUrl = '/api/v1'

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(rootUrl + '/postFeed')
  return res.body
}

export async function addPost(post: string, token: string, image: string) {
  const newPost: AddedPost = {
    content: post,
    image_url: image,
  }
  console.log('image', image)
  await request
    .post(rootUrl + '/postFeed')
    .send(newPost)
    .auth(token, { type: 'bearer' })
}
