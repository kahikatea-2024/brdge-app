/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post_comments').del()
  await knex('post_comments').insert([
    {
      user_id: 3,
      body: 'Great analogy! Quick sort is my go-to recipe.',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 9,
    },

    {
      user_id: 2,
      body: 'Totally agree! Flexbox is my favorite tool for layout',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 8,
    },
    {
      user_id: 3,
      body: 'Love this comparison! Finding and fixing bugs is so satisfying.',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 7,
    },
    {
      user_id: 2,
      body: 'Absolutely! Well-crafted functions make for smooth, efficient coding.',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 6,
    },
  ])
}
