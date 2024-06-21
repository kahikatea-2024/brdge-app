import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import db from '../connection.ts'
import { getAllPosts } from '../postFeed'

// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getAllPosts', () => {
  it('returns an array of all posts', async () => {
    //ARRANGE
    //set up the mock object
    const examplePost = {
      feed_post_id: 1,
      user_id: 1,
      content: 'blah blah blah',
      timestamp: '2024-06-20 10:42:33',
      image_url: 'placeholder',
      username: 'Shrek',
      avatar_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
    }
    //ACT
    const posts = await getAllPosts()
    console.log(posts)

    //ASSERT
    expect(posts).toHaveLength(3)
    expect(posts[0]).toStrictEqual(examplePost)
  })
})
