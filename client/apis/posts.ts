import request from 'superagent'
import { NewFeedPost, Post } from '../../models/postFeed'

const rootUrl = '/api/v1/'

export function getAllPosts(): Promise<Post[]> {
  return request.get(rootUrl + '/postFeed').then((res) => {
    return res.body
  })
}

export async function addPost(post: string) {
  const newPost: NewFeedPost = {
    user_id: 1,
    content: post,
    image_url:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  }
  await request.post(rootUrl + '/postFeed').send(newPost)
}
