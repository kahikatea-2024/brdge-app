/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      event_id: 1,
      event_organiser_id: 1,
      event_name: 'Swamp Party',
      event_description: 'blah blah',
      event_time: '19:00',
      event_location: 'Auckland',
      event_date: '2024-06-24',
    },
    {
      event_id: 2,
      event_organiser_id: 1,
      event_name: 'Wedding',
      event_description: 'blah blah',
      event_time: '19:00',
      event_location: 'Auckland',
      event_date: '2024-06-24',
    },
    {
      event_id: 3,
      event_organiser_id: 3,
      event_name: 'Dronkeys baby shower',
      event_description: 'blah blah',
      event_time: '19:00',
      event_location: 'Auckland',
      event_date: '2024-06-24',
    },
  ])
}
