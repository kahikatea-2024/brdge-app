/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post_comments').del()
  await knex('post_comments').insert([
    {
      id: 1,
      user_id: 1,
      parent_id: null,
      body: 'bleh bleh bleh',
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
    {
      id: 1,
      user_id: 1,
      parent_id: 1,
      body: 'reply the first comment',
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
    {
      id: 1,
      user_id: 1,
      parent_id: null,
      body: 'bleh bleh bleh',
      created_at: '2024-08-16T23:00:33.010+02:00',
      feed_post_id: 1,
    },
  ])
}
