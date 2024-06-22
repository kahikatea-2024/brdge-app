/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 1,
      auth0Id: 'auth0|6674a9c1a7ae4c2f109f5666',
      username: 'Shrek',
      first_name: 'Shrek',
      last_name: 'Myers',
      join_date: '2024-06-19',
      birth_date: '1963-05-25',
      user_email: 'shrek@exampleswamp.com',
      is_mentor: true,
    },
    {
      user_id: 2,
      auth0Id: 'auth0|6674ea7ddc9d3f16bd035b31',
      username: 'Fiona',
      first_name: 'Fiona',
      last_name: 'Myers',
      join_date: '2024-06-19',
      birth_date: '1972-08-30',
      user_email: 'fiona@exampleswamp.com',
      is_mentor: false,
    },
    {
      user_id: 3,
      auth0Id: 'auth0|6674ea2fb5a9d17bbb815892',
      username: 'Donkey',
      first_name: 'Donkey',
      last_name: 'Murphy',
      join_date: '2024-06-19',
      birth_date: '1961-04-03',
      user_email: 'donkey@exampleswamp.com',
      is_mentor: false,
    },
  ])
}
