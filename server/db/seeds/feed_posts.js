/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('feed_posts').del()
  await knex('feed_posts').insert([
    {
      feed_post_id: 1,
      user_id: 1,
      content: 'blah blah blah',
      post_date: '2024-06-19',
      image_url: 'placeholder',
    },
    {
      feed_post_id: 2,
      user_id: 1,
      content: 'blah blah blah',
      post_date: '2024-06-19',
      image_url: 'placeholder',
    },
    {
      feed_post_id: 3,
      user_id: 1,
      content: 'blah blah blah',
      post_date: '2024-06-19',
      image_url: 'placeholder',
    },
  ])
}
