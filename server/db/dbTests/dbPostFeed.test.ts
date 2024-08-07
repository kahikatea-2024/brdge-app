import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import db from '../connection.ts'
import { addPost, getAllPosts, getPostById } from '../postFeed'

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
      user_id: 2,
      content:
        'Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure',
      timestamp: '2024-06-20 10:42:33',
      image_url:
        'https://ew.com/thmb/MJ9fepugxxMz1ymEz5Vynl4oZNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488099013-dfb78fc13f984cb580d4a9aa444c8a33.jpg',
      username: 'Fiona',
      avatar_image:
        'https://64.media.tumblr.com/abdba580b7f46e44590d76ac172087ef/tumblr_inline_pdmkzmXp8x1s442te_640.jpg',
    }
    //ACT
    const posts = await getAllPosts()

    //ASSERT
    expect(posts).toHaveLength(9)
    expect(posts[0]).toStrictEqual(examplePost)
  })
})

// describe('delete by id', () => {
//   it('deletes the post', async () => {
//     //ARRANGE
//     const postId = 2

//     //ACT & ASSERT
//     await deletePost(postId, auth0Id)
//     const posts = await getAllPosts()
//     const res = posts.find((post: Post) => post.feed_post_id === postId)
//     expect(res).toBe(undefined)
//   })
//   it('returns number of deleted records', async () => {
//     //given
//     const postId = 2
//     //when
//     const res = await deletePost(postId, auth0Id)
//     //then
//     expect(res).toBe(1)
//   })
// })

describe('addPost', () => {
  it('returns an array including the example below', async () => {
    const post = {
      user_id: 1,
      content:
        'Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure',
      image_url:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    }

    await addPost(post)
    const res = await getAllPosts()

    expect(res).toHaveLength(10)
    expect(res[9].content).toContain(
      'Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure',
    )
  })
})

describe('getPostById', () => {
  it('returns a single user', async () => {
    const id = 1
    const post = await getPostById(id)

    expect(post).toHaveProperty('user_id')
    expect(post).toHaveProperty('content')
    expect(post).toHaveProperty('timestamp')
    expect(post).toHaveProperty('image_url')
  })
  it('returns the correct post', async () => {
    const id = 2
    const post = await getPostById(id)

    expect(post.user_id).toBe(3)
    expect(post.content).toBe(
      "Hey there, coder! Ever thought about variables like food? Oh, I love food! Think of variables as your favorite snacks. You can name 'em anything you like. Want to store a number? Call it numCookies. Got a word in mind? Name it myFavoriteQuote. Just remember to be clear so you don't end up eating cake when you wanted waffles! Variables are the tasty morsels in your code recipe!",
    )
  })
})
