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
      isExperience: false,
    },
    {
      user_background_id: 2,
      user_id: 2,
      background_id: 1,
      duration: '2021 to present',
      position_or_qualification: 'Masters in JiuJitsu',
      isExperience: false,
    },
    {
      user_background_id: 3,
      user_id: 3,
      background_id: 2,
      duration: '2021 to present',
      position_or_qualification: 'Animal Control Operator',
      isExperience: true,
    },
    {
      user_background_id: 4,
      user_id: 3,
      background_id: 3,
      duration: '2021 to present',
      position_or_qualification: 'Career Skills Facilitator',
      isExperience: true,
    },
  ])
}
