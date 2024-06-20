export interface Post {
  feed_post_id: number
  user_id: number
  content: string
  post_date: string
  image_url: string
}

//above interface less the feed_post_id
export type PostData = Omit<Post, 'feed_post_id'>
