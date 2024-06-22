// @vitest-environment jsdom
import { beforeAll, describe, expect, it } from 'vitest'
import nock from 'nock'
import { setupApp } from './setup'

const mockData =    {
  feed_post_id: 1,
  user_id: 1,
  content: `Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure`,
  timestamp: '2024-06-20 10:42:33',
  image_url:
    'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
},



beforeAll(() => {
  nock.disableNetConnect()
})

describe("get All Posts", () => {
  it("shows all posts", async () => {
    const scope = nock('http://localhost')
    .get('/api/v1/postFeed')
    .reply(200, mockData)

    const screen = setupApp('/')

    const timestamp = await screen.findByText('2024-06-20 10:42:33')
    expect(timestamp).toBe('2024-06-20 10:42:33')
    expect(scope.isDone()).toBe(true)

  })
})


