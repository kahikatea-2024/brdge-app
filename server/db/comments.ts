import { Comments, NewComment, NewCommentData } from '../../models/postFeed.ts'
import db from './connection.ts'
import { Post } from '../../models/postFeed.ts'

export async function getAllComments() {
  const commentsWithReplies = await db('post_comments')
    .join('users', 'users.user_id', 'post_comments.user_id')
    .join('feed_posts', 'feed_posts.feed_post_id', 'post_comments.feed_post_id')
    .join('profiles', 'profiles.user_id', 'users.user_id')
    .select(
      'post_comments.id as id',
      'post_comments.user_id as user_id',
      'post_comments.body as body',
      'users.username as user_name',
      'profiles.avatar_image as img_url',
      'post_comments.parent_id as parent_id',
      'post_comments.created_at as created_at',
      'post_comments.feed_post_id as post_id',
    )

  // .orderBy('comments.created_at', 'desc')
  return commentsWithReplies as Comments[]
}

export async function getCommentsById(id: number | string) {
  const comment = await db('post_comments').select().first().where({ id })
  return comment as Comment
}

export async function getCommentsByPostId(feed_post_id: number) {
  const commentsByPostId = await db('post_comments')
    .join('users', 'users.user_id', 'post_comments.user_id')
    .join('feed_posts', 'feed_posts.feed_post_id', 'post_comments.feed_post_id')
    .join('profiles', 'profiles.user_id', 'users.user_id')
    .select(
      'post_comments.id as id',
      'post_comments.user_id as user_id',
      'post_comments.body as body',
      'users.username as user_name',
      'profiles.avatar_image as img_url',
      'post_comments.parent_id as parent_id',
      'post_comments.created_at as created_at',
      'post_comments.feed_post_id as post_id',
    )
    // .first()
    .where('post_comments.feed_post_id', feed_post_id)
  // console.log(commentsByPostId)
  return commentsByPostId as Comments[]
}
export async function getCommentCountByPostId(
  feed_post_id: number,
): Promise<number> {
  const countResult = await db('post_comments')
    .where({ feed_post_id })
    .count('* as count')
    .first()

  return countResult ? Number(countResult.count) : 0
}
