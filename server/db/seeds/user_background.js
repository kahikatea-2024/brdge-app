/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_background').del()
  await knex('user_background').insert([
    {
      user_background_id: 1,
      user_id: 1,
      background_id: 1,
      duration: '2021 to present',
      position_or_qualification: 'Bachelor of Food Science',
    },
    {
      user_background_id: 2,
      user_id: 2,
      background_id: 1,
      duration: '2021 to present',
      position_or_qualification: 'Masters in JiuJitsu',
    },
    {
      user_background_id: 3,
      user_id: 3,
      background_id: 2,
      duration: '2021 to present',
      position_or_qualification: 'Animal Control Operator',
    },
  ])
}
