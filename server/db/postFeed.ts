import { Post, PostData } from '../../models/postFeed.ts'
import db from './connection.ts'

//getAllPosts
export async function getAllPosts() {
  const post = await db('feed_posts').select()
  return post as Post[]
}

//addPost -AUTH to be included
export async function addPost(newPost: PostData) {
  const res = await db('feed_posts').insert(newPost)
}
//editPost -AUTH to be included
export async function editPost(updatedPost: Post) {
  const { feed_post_id, user_id, content, post_date, image_url } = updatedPost
  return db('feed_posts')
    .where({ feed_post_id })
    .update({ user_id, content, post_date, image_url })
}

//deletPost
export async function deletePost(id: number) {
  return db('feed_posts').where('feed_post_id', id).delete()
}
//getPostById
export async function getPostById(id: number): Promise<Post> {
  const res = await db('feed_posts').where('feed_post_id', id).first()
  return res
}
