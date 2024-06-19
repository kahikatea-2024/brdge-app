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
      username: 'Shrek',
      first_name: 'Shrek',
      last_name: 'Myers',
      join_date: '2024-06-19',
      birth_date: '1963-05-25',
      user_email: 'shrek@swamp.com',
      is_mentor: true,
    },
    {
      user_id: 2,
      username: 'Fiona',
      first_name: 'Fiona',
      last_name: 'Myers',
      join_date: '2024-06-19',
      birth_date: '1972-08-30',
      user_email: 'fiona@swamp.com',
      is_mentor: false,
    },
    {
      user_id: 3,
      username: 'Donkey',
      first_name: 'Donkey',
      last_name: 'Murphy',
      join_date: '2024-06-19',
      birth_date: '1961-04-03',
      user_email: 'donkey@swamp.com',
      is_mentor: false,
    },
  ])
}
