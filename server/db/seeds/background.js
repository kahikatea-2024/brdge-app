/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('background').del()
  await knex('background').insert([
    {
      background_id: 1,
      is_education: true,
      is_experience: false,
      logo_url: 'placeholder',
      name_of_place: 'Swamp Polytechnic',
    },
    {
      background_id: 2,
      is_education: false,
      is_experience: true,
      logo_url: 'placeholder',
      name_of_place: 'Circus',
    },
    {
      background_id: 3,
      is_education: true,
      is_experience: true,
      logo_url: 'placeholder',
      name_of_place: 'Dev Academy',
    },
    {
      background_id: 4,
      is_education: true,
      is_experience: false,
      logo_url: 'placeholder',
      name_of_place: 'University of Neverland',
    },
    {
      background_id: 5,
      is_education: false,
      is_experience: true,
      logo_url: 'placeholder',
      name_of_place: 'Far Far Away Federation',
    },
    {
      background_id: 6,
      is_education: false,
      is_experience: true,
      logo_url: 'placeholder',
      name_of_place: 'Pied Piper',
    },
  ])
}
