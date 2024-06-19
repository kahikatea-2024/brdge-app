/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post_comments').del()
  await knex('post_comments').insert([
    {
      comment_id: 1,
      feed_post_id: 1,
      user_id: 2,
      content: 'bleh bleh bleh',
      post_date: '2024-06-19',
    },
    {
      comment_id: 2,
      feed_post_id: 1,
      user_id: 2,
      content: 'bleh bleh bleh',
      post_date: '2024-06-19',
    },
    {
      comment_id: 3,
      feed_post_id: 1,
      user_id: 2,
      content: 'bleh bleh bleh',
      post_date: '2024-06-19',
    },
  ])
}
