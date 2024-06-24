export interface Post {
  feed_post_id: number
  user_id: number
  content: string
  timestamp: string
  image_url: string
  username: string
  avatar_image: string
  poster_auth0Id: string
}

export interface NewPost {
  feed_post_id: number
  user_id: number
  content: string
  timestamp: string
  image_url: string
  username: string
  avatar_image: string
  poster_auth0Id: string
}

//above interface less the feed_post_id

export type PostData = Omit<Post, 'feed_post_id' | 'timestamp'>

export type NewPostData = Omit<NewPost, 'feed_post_id' | 'timestamp'>
