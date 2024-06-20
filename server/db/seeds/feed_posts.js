/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('feed_posts').del()
  await knex('feed_posts').insert([
    {
      feed_post_id: 1,
      user_id: 1,
      content: 'blah blah blah',
      timestamp: '2024-06-20 10:42:33',
      image_url: 'placeholder',
    },
    {
      feed_post_id: 2,
      user_id: 1,
      content: 'blah blah blah',
      timestamp: '2024-06-20 10:55:33',
      image_url: 'placeholder',
    },
    {
      feed_post_id: 3,
      user_id: 1,
      content: 'blah blah blah',
      timestamp: '2024-06-20 10:56:33',
      image_url: 'placeholder',
    },
  ])
}
