import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import db from '../connection.ts'
import { deletePost, getAllPosts } from '../postFeed'
import request from 'supertest'
import server from '../../server.ts'
import { Post } from '../../../models/postFeed'
import { getUserProfileById, getUserProfileByUsername } from '../userProfile'

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
      content:
        'Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure',
      timestamp: '2024-06-20 10:42:33',
      image_url:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
      username: 'Shrek',
      avatar_image:
        'https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg',
    }
    //ACT
    const posts = await getAllPosts()

    //ASSERT
    expect(posts).toHaveLength(5)
    expect(posts[0]).toStrictEqual(examplePost)
  })
})

describe('delete by id', () => {
  it('deletes the post', async () => {
    //ARRANGE
    const postId = 2

    //ACT & ASSERT
    await deletePost(postId)
    const posts = await getAllPosts()
    const res = posts.find((post: Post) => post.feed_post_id === postId)
    expect(res).toBe(undefined)
  })
})

describe('search by username', () => {
  it('can search by start of username', async () => {
    //ARRANGE
    const query = 'Shr'
    //ACT
    const result = await getUserProfileByUsername(query)
    //ASSERT
    expect(result).toHaveLength(1)
    expect(result[0].username).toBe('Shrek')
  })
  it('can search by contained phrase', async () => {
    //given
    const query = 'on'
    //when
    const res = await getUserProfileByUsername(query)
    //then
    expect(res).toHaveLength(2)
    expect(res[0].username).toBe('Fiona')
    expect(res[1].username).toBe('Donkey')
  })
  it('search by exact match', async () => {
    const query = 'Donkey'

    const res = await getUserProfileByUsername(query)

    expect(res).toHaveLength(1)
    expect(res[0].username).toBe('Donkey')
  })
  it('is case insensitive', async () => {
    const query1 = 'Fiona'
    const query2 = 'fiona'

    const res1 = await getUserProfileByUsername(query1)
    const res2 = await getUserProfileByUsername(query2)
    // console.log(res1)
    // console.log(res2)
    expect(res1[0].username === res2[0].username).toBe(true)
  })

  ///REFACTOR after conditonal error messages added to search
  it('has no match', async () => {
    const query = '12345'

    const res = await getUserProfileByUsername(query)

    expect(res).toHaveLength(0)
  })
})
