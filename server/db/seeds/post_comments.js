/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post_comments').del()
  await knex('post_comments').insert([
    {
      user_id: 1,
      body: 'bleh bleh bleh',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
    {
      user_id: 1,
      body: 'reply the first comment',
      parent_id: 1,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
    {
      user_id: 1,
      body: 'bleh bleh bleh',
      parent_id: null,
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
  ])
}
