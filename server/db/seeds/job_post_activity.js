/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('job_post_activity').del()
  await knex('job_post_activity').insert([
    {
      job_post_activity_id: 1,
      user_id: 1,
      job_id: 2,
      application_date: '2024-06-19',
    },
    {
      job_post_activity_id: 2,
      user_id: 1,
      job_id: 1,
      application_date: '2024-06-19',
    },
    {
      job_post_activity_id: 3,
      user_id: 1,
      job_id: 3,
      application_date: '2024-06-19',
    },
  ])
}
