import db from './connection.ts'

//getAllPosts
export async function getAllPosts() {
  const post = await db('feed_posts').select()
  return post
}

//addPost

//editPost

//deletPost

//getPostById
